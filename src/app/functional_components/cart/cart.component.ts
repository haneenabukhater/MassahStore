import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AddToCartService } from "../../add-to-cart.service";
import { FirebaseListObservable } from "angularfire2/database";
import { ProductService } from "../../product.service";
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
  providers: [AddToCartService, ProductService]
})
export class CartComponent implements OnInit {
  objectsArray: any[] = null;
  subTotal: "";
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(
    private addToCartService: AddToCartService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.addToCartService.getCart()) {
      this.objectsArray = [];
      this.loadCartFromSessionStorage();
    }
  }
  productWasClicked(product) {
    this.router.navigate(["products/item", product.$key]);
  }

  loadCartFromSessionStorage() {
    const cart = JSON.parse(this.addToCartService.getCart());
    this.objectsArray = [];
    cart.forEach(e => {
      this.productService.getProductById(e.itemId).subscribe(item => {
        item.quantityInCart = e.quantity;
        if (item.quantityInCart !== 0) {
          this.objectsArray.push(item);
        }
        this.getCumulativeSubTotal();
      });
    });
    console.log(this.objectsArray);
  }
  getCumulativeSubTotal() {
    this.subTotal = "";
    this.subTotal += "$";
    this.subTotal += this.objectsArray.reduce((accumulator, current) => {
      return accumulator + current.Variant_Price * current.quantityInCart;
    }, 0);
  }

  updateButtonWasClicked(clickedItem, newQuantity) {
    const difference = clickedItem.quantityInCart - Number(newQuantity);
    this.addToCartService.removeItemFromCart(clickedItem.$key, -difference);
    this.loadCartFromSessionStorage();
  }
}

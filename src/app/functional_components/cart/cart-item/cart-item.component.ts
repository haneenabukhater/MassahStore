import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./../cart.component.css"]
})
export class CartItemComponent {
  @Input() items;
  @Output() updateCart = new EventEmitter();
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router) {}

  productWasClicked(product) {
    this.router.navigate(["products/item", product.$key]);
  }
  handleUpdate(item, quantity) {
    this.updateCart.emit({ item, quantity });
  }
}

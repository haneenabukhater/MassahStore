import { Component, OnInit } from '@angular/core';
import { AddToCartService }  from '../add-to-cart.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import  * as Rx  from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ AddToCartService, ProductService ]
})
export class CartComponent implements OnInit {
   objectsArray: any[] = null;
   myObservable: FirebaseListObservable<any>;
   subTotal: number;

  constructor(private addToCartService: AddToCartService,
              private productService: ProductService) {
   }

  ngOnInit() {
    if (this.addToCartService.getCart()) {
      this.objectsArray = [];
      this.loadCartFromSessionStorage();
    }


  }

  loadCartFromSessionStorage() {
    let cart =  JSON.parse( this.addToCartService.getCart() );
    cart.forEach( e => {
      this.productService.getProductById(e.itemId)
                         .subscribe( item => {
                           item.quantityInCart = e.quantity;
                           this.objectsArray.push(item);
                           this.getCumulativeSubTotal();
                         })
    })
}
  getCumulativeSubTotal() {
    this.subTotal = this.objectsArray.reduce(
                          function(accumulator, current){
                          return accumulator + (current.Variant_Price * current.quantityInCart)
                              }, 0);
}

updateButtonWasClicked(clickedItem, newQuantity) {
  let difference = clickedItem.quantityInCart - Number(newQuantity);
  this.addToCartService.removeItemFromCart(clickedItem.$key, -difference);
  window.location.reload();
}


}

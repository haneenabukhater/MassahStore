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
    let asObject =  this.addToCartService.getCart().split(',').forEach(e=> {
      // console.log('hey');
      // console.log(e)
      // console.log(JSON.parse(e))
    } ) ;
    // console.log(asObject);
    // return this.addToCartService
    //   .getCart()
    //   .split(',')
    //   .map(item => {
    //     this.productService
    //   .getProductById("2")
    //   .subscribe(
    //     dataLastEmitted => {
    //       this.objectsArray.push(dataLastEmitted)
    //       this.getCumulativeSubTotal();
    //     }
    // )}
  // )}
}
  getCumulativeSubTotal() {
    console.log('called cum total')
    this.subTotal = this.objectsArray.reduce(
                          function(accumulator, current){
                          return accumulator + current.Variant_Price
                              }, 0);
}

removeButtonWasClicked(clickedItem) {
  this.addToCartService.removeItemFromCart(clickedItem.$key, -2);
  window.location.reload();
}


}

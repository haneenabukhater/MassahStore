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
  // ngAfterContentInit() {
  //   let source = Rx.Observable.from(this.objectsArray)
  //   let subs = source.subscribe(
  //        e => alert('hey'),
  //        error => console.log(error),
  //        () => console.log('were done here')
  //      )
  // }

  loadCartFromSessionStorage() {
    return this.addToCartService
      .getCart()
      .split(',')
      .map(item => { this.productService
      .getProductById(item)
      .subscribe(
        dataLastEmitted => {
          this.objectsArray.push(dataLastEmitted)
          this.getCumulativeSubTotal();
        }
    )}
  )}

  getCumulativeSubTotal() {
    console.log('made it this far')
    this.subTotal = this.objectsArray.reduce(
                          function(accumulator, current){
                          return accumulator + current.Variant_Price
                              }, 0);
}

removeButtonWasClicked(payload) {
  this.addToCartService.removeItemFromCart(payload.$key);
  window.location.reload();
}


}

import { Component, OnInit } from '@angular/core';
import { AddToCartService }  from '../add-to-cart.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ AddToCartService, ProductService ]
})
export class CartComponent implements OnInit {
   objectsArray: any[] = [];
   myObservable: FirebaseListObservable<any>;
   subTotal: number;

  constructor(private addToCartService: AddToCartService,
              private productService: ProductService) {
   }

  ngOnInit() {
    if (!this.addToCartService.getCart()) {
      this.subTotal = null;
    } else {
      this.addToCartService
        .getCart()
        .split(',')
        .map(item => { this.productService
        .getProductById(item)
        .forEach(dataLastEmitted => {
          this.objectsArray.push(dataLastEmitted)
          this.getCumulativeSubTotal();
        })
      });
    }
  }

  getCumulativeSubTotal() {
    this.subTotal = this.objectsArray.reduce(
                          function(accumulator, current){
                          return accumulator + current.Variant_Price
                              }, 0);
}

removeButtonWasClicked(payload) {
  this.addToCartService.removeItemFromCart(payload.$key);
}





}

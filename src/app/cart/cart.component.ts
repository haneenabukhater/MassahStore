import { Component, OnInit } from '@angular/core';
import { AddToCartService }  from '../add-to-cart.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [AddToCartService, ProductService]
})
export class CartComponent implements OnInit {
   objectsArray: any[] = [];
  


  constructor(private addToCartService: AddToCartService,
              private productService: ProductService) {

   }

  ngOnInit() {
    this.addToCartService
        .getCart()
        .split(',')
        .map(item => { this.productService
        .getProductById(item)
        .subscribe(dataLastEmitted => { this.objectsArray.push(dataLastEmitted);
        })
        });
        console.log(this.doIt());

  }
  doIt() {
    return this.objectsArray.reduce( function(accumulator, current){
                          return accumulator + current.Variant_Price
                        }, 0);
}





}

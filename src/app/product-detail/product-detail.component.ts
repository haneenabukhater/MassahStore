import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { AddToCartService } from '../add-to-cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ ProductService, AddToCartService ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  productToDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private productService: ProductService,
              private addToCartService: AddToCartService
) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
    });
     this.productService.getProductById(this.productId).subscribe( dataEmitted => {
      this.productToDisplay = dataEmitted;
    });
  }
  addToCart() {
    this.addToCartService.addItemToCart(this.productId);
  }

  printBody() {
    document.getElementById('homies').innerHTML = this.productToDisplay.Body;
  }

  checkMyCart() {
    if (this.addToCartService.getCart() === null) {
      alert('Your cart is currently empty.')
    } else {
    alert( this.addToCartService.getCart() );
    }
  }
}

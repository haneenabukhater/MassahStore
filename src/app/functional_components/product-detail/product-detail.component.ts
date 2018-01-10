import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../product.service';
import { AddToCartService } from '../../add-to-cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ ProductService, AddToCartService ]
})
export class ProductDetailComponent implements OnInit {
  public numberOfItems;
  productId: string;
  productToDisplay;
  displayContinueShoppingMessage: boolean = false;
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  constructor(private route: ActivatedRoute,
              private location: Location,
              private productService: ProductService,
              private addToCartService: AddToCartService,
              private myRouter: Router
) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
    });
     this.productService.getProductById(this.productId).subscribe( dataEmitted => {
      this.productToDisplay = dataEmitted;
    });
  }
  addToCart(q: string) {
    this.displayContinueShoppingMessage = true;
    this.addToCartService.addItemToCart(this.productId, Number(q));
  }

  printBody() {
    document.getElementById('homies').innerHTML = this.productToDisplay.Body;
  }
  continueShoppingWasClicked() {
    window.history.back();
  }
  myCartButtonWasClicked() {
    this.myRouter.navigate(['cart']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService ]
})
export class ProductListComponent implements OnInit {
  category: string;
  products: any[];
  // nextButton: boolean = true;
  backButton: boolean = false;
  num1: number = 0;
  num2: number = 11;

  constructor(private currentRoute: ActivatedRoute,
              private productService: ProductService,
              private myRouter: Router
            ) { }
  ngOnInit() {
    this.productService.getProducts().subscribe( lastData => {
      this.products = lastData;
    });
    this.currentRoute.params.forEach( parameters => {
      this.category = parameters['category'];
    })
  }
  productWasClicked(clickedProduct) {
    this.myRouter.navigate(['products/item', clickedProduct.Handle]);
  }
  nextPage() {
    this.cycleProducts(12);
    this.backButton = true;
  }
  backPage() {
    this.cycleProducts(-12);
  }
  cycleProducts(input) {
    this.num1 += input;
    this.num2 += input;
    if (this.num1 === 0) this.backButton = false;
  }
}

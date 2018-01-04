import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, DoCheck {
  category: string;
  products: any[];
  productsAll: any[];
  nextButton = false;
  backButton = false;
  num1 = 0;
  num2 = 11;

  constructor(private currentRoute: ActivatedRoute,
    private productService: ProductService,
    private myRouter: Router
  ) { }
  ngOnInit() {
    this.grabAllProductsFromFireBase();
    this.grabCategoryFromURI();
  }
  ngDoCheck() {
    this.filterProductsByCategory();
  }
  filterProductsByCategory() {
    if (this.category === 'all') {
      return this.products = this.productsAll;
    }
    this.products = this.productsAll.filter( product => {
      return product.Tags === undefined || product.Tags.includes(this.category);
    });
  }
  grabAllProductsFromFireBase() {
    this.productService.getProducts().subscribe(lastData => {
      this.productsAll = lastData;
    });
  }
  grabCategoryFromURI() {
    this.currentRoute.params.forEach(parameters => {
      if (!parameters['category']) {
        this.category = 'all';
      } else {
        this.category = parameters['category'];
      }
    });
  }
  productWasClicked(clickedProduct) {
    this.myRouter.navigate(['products/item', clickedProduct.$key]);
  }
  ngAfterContentInit() {
    this.evaluateNextButton;
  }
  evaluateNextButton(fromChild) {
    this.nextButton = fromChild;
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

import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../product.service';
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
  num2 = 12;
  PAGINATOR_COUNT = 12;

  constructor(private currentRoute: ActivatedRoute,
    private productService: ProductService,
    private myRouter: Router
  ) { }
  ngOnInit() {
    this.grabAllProductsFromFireBase();
    this.grabCategoryFromURI();
  }
  ngDoCheck() {
    console.log(this.category)
    if (this.productsAll) {
      this.filterProductsByCategory();
      this.evaluateNextButton();
    }
  }
  filterProductsByCategory() {
    console.log('filtering', this.category);
    if (this.category === 'all') {
      return this.products = this.productsAll;
    }
    this.products = this.productsAll.filter(product => {
      return product.Tags === undefined || product.Tags.includes(this.category);
    });
  }
  grabAllProductsFromFireBase() {
    this.productService.getProducts().subscribe(lastData => {
      this.productsAll = lastData;
    });
  }
  grabCategoryFromURI() {
    console.log('grabbing category');
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
  evaluateNextButton() {
    if (this.products.length > this.PAGINATOR_COUNT) {
      this.nextButton = true;
    } else {
      this.nextButton = false;
    }
  }
  paginatorClicked(buttonValue) {
    if (buttonValue === 'next') {
      this.nextPage();
    } else {
      this.backPage();
    }
  }
  nextPage() {
    this.cycleProducts(this.PAGINATOR_COUNT);
    this.backButton = true;
  }
  backPage() {
    this.cycleProducts(-this.PAGINATOR_COUNT);
  }
  cycleProducts(input) {
    this.num1 += input;
    this.num2 += input;
    const itemsLeft = this.products.length - this.num2;
    if (this.num1 === 0) {
      this.backButton = false;
    }
    if (itemsLeft < this.PAGINATOR_COUNT) {
      this.nextButton = false;
    }
  }
}

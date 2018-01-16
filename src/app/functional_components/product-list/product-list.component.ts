import { Component, OnInit, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductService } from "../../product.service";
import { FirebaseListObservable } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
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

  constructor(
    private currentRoute: ActivatedRoute,
    private productService: ProductService,
    private myRouter: Router
  ) {}
  ngOnInit() {
    this.grabAllProductsFromFireBase();
  }
  ngDoCheck() {
    const prevCategory = this.category;
    this.grabCategoryFromURI();
    if (prevCategory !== this.category) {
      this.resetPagination();
    }
    if (this.productsAll) {
      this.filterProductsByCategory();
      this.evaluateNextButton();
    }
  }
  resetPagination() {
    this.num1 = 0;
    this.num2 = this.PAGINATOR_COUNT;
    this.backButton = false;
  }
  filterProductsByCategory() {
    this.products =
      this.category === "all"
        ? this.productsAll
        : this.productsAll.filter(product => {
            return (
              product.Tags.includes(this.category) ||
              product.Type === this.category
            );
          });
  }
  grabAllProductsFromFireBase() {
    this.productService.getProducts().subscribe(lastData => {
      this.productsAll = lastData;
    }).unsubscribe;
  }
  grabCategoryFromURI() {
    this.category = this.currentRoute.snapshot.params.category;
  }
  productWasClicked(clickedProduct) {
    this.myRouter.navigate(["products/item", clickedProduct.$key]);
  }
  evaluateNextButton() {
    const productsLeft = this.products.length - this.num2;
    this.nextButton = productsLeft > 0 ? true : false;
  }
  paginatorClicked(buttonValue) {
    buttonValue === "next" ? this.nextPage() : this.backPage();
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
    if (this.num1 === 0) this.backButton = false;

    if (itemsLeft < this.PAGINATOR_COUNT) {
      this.nextButton = false;
    }
  }
}

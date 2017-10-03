import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  currentRoute: string = this.router.url;
  products: any[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe( lastData => {
      this.products = lastData;
    });

  }

}

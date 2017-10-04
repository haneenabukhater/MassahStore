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
  homies: number = .8;

  constructor(private currentRoute: ActivatedRoute,
              private productService: ProductService
            ) { }

  ngOnInit() {

    this.productService.getProducts().subscribe( lastData => {
      this.products = lastData;
    });

    this.currentRoute.params.forEach( parameters => {
      this.category = parameters['category'];
    })

  }
}

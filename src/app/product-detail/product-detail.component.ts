import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location,
              private productService: ProductService
) { }

  ngOnInit() {
  }

}

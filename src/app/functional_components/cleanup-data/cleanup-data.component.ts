import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cleanup-data',
  templateUrl: './cleanup-data.component.html',
  styleUrls: ['./cleanup-data.component.css']
})
export class CleanupDataComponent implements OnInit {
  products: FirebaseListObservable<any[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  cleanMe() {
    this.products.subscribe(products => {
      for (let product of products) {
        let prod = this.productService.getProductById(product.$key);
        for(let key in product) {
          if (!product[key]) delete product[key];
        }
        prod.set(product);
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { }
  
  getProducts(){
    return this.database.list('products');
  }
  getProductById(productId: string) {
   return this.database.object('products/' + productId);
 }
 removeProduct() {
  //  this.database.object()
 }

}

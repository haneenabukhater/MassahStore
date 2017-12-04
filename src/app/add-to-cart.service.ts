import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AddToCartService {
  myCart: FirebaseListObservable<any[]>;

  constructor(private cloudStorage: AngularFireDatabase) {
    this.myCart = cloudStorage.list('items')
  }
  addItemToCart(itemId: string) {
    if (! sessionStorage.getItem('myCart')) {
      sessionStorage.setItem('myCart', itemId);
    } else {
      let updatedCart = sessionStorage.getItem('myCart')
                                      .concat("," + itemId);
      sessionStorage.setItem('myCart', updatedCart);
    }
  }
  findItemInCartById(itemId: string) {
    return this.cloudStorage.object(itemId);
  }

  removeItemFromCart(itemId: string) {
    let updatedCart = sessionStorage.getItem('myCart')
                  .split(',')
                  .filter(e => e != itemId)
                  .join(',');
    if(!updatedCart) return sessionStorage.clear();
    sessionStorage.setItem('myCart', updatedCart);
  }

  getCart() {
    return sessionStorage.getItem('myCart');
  }
}

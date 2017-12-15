import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AddToCartService {
  myCart: FirebaseListObservable<any[]>;

  constructor(private cloudStorage: AngularFireDatabase) {
    this.myCart = cloudStorage.list('items')
  }
  addItemToCart(itemId: string, quantity: number) {
    let addIt = [ { itemId, quantity } ];
    let currentCart = this.getCart();
    let stringy = JSON.stringify( addIt);
    if (!currentCart)
      sessionStorage.setItem('myCart', stringy);
    else
      sessionStorage.setItem('myCart', this.updatedCart(currentCart, addIt[0]));
  }

  updatedCart(csvString: string, itemToUpdate: any) {
    let cartAsJSON = JSON.parse(csvString);
    let found: boolean;

    cartAsJSON.forEach( e => {
      if (e.itemId === itemToUpdate.itemId) {
        found = true;
        return e.quantity += itemToUpdate.quantity;
      }
    });

    if (!found) cartAsJSON.push(itemToUpdate)
    return JSON.stringify(cartAsJSON);
  }

  findItemInCartById(itemId: string) {
    return this.cloudStorage.object(itemId);
  }

  removeItemFromCart(itemId: string, quantity: number) {
    let asObject = { itemId, quantity };
    let updatedCart = this.updatedCart( this.getCart(), asObject );
    if(!updatedCart) return sessionStorage.removeItem('myCart');
    sessionStorage.setItem('myCart', updatedCart);
  }

  getCart() {
    return sessionStorage.getItem('myCart');
  }
}

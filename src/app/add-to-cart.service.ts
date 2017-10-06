import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AddToCartService {
  myCart: FirebaseListObservable<any[]>;

  constructor(private cloudStorage: AngularFireDatabase) {
    this.myCart = cloudStorage.list('items')
  }
  addItemToCart(itemIdPassedIn: string, quantityPassedIn: number) {
    // console.log(itemIdPassedIn, quantityPassedIn);
    let addIt = [
      {
        itemId: itemIdPassedIn,
        quantity: quantityPassedIn
      }
    ];
    let stringy = JSON.stringify(addIt);
    if (! sessionStorage.getItem('myCart')) {
      sessionStorage.setItem('myCart', stringy);
    } else {
      let updatedCart =
          this.updatedCart(
            sessionStorage.getItem('myCart'),
            itemIdPassedIn,
            quantityPassedIn);

      sessionStorage.setItem('myCart', updatedCart);
    }
  }


  updatedCart(csvString: string, itemIdPassedIn: string, quantityPassedIn: number) {
    let cartAsJSON = JSON.parse(csvString);
    let found: boolean;

    cartAsJSON.forEach( e => {
      if (e.itemId === itemIdPassedIn) {
        found = true;
        return e.quantity += quantityPassedIn;
      }
    });

    if (!found) {
      cartAsJSON.push(
      {
        itemId: itemIdPassedIn,
        quantity: quantityPassedIn
      })
    }
    return JSON.stringify(cartAsJSON);
  }

  findItemInCartById(itemId: string) {
    return this.cloudStorage.object(itemId);
  }

  removeItemFromCart(itemIdPassedIn: string, quantityPassedIn: number) {
    let updatedCart = this.updatedCart(
                          sessionStorage.getItem('myCart'), itemIdPassedIn,
                          quantityPassedIn);

    if(!updatedCart) return sessionStorage.clear();
    sessionStorage.setItem('myCart', updatedCart);
  }

  getCart() {
    return sessionStorage.getItem('myCart');
  }
}

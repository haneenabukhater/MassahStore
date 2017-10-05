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
    let addIt =
      {
        itemId: itemIdPassedIn,
        quantity: quantityPassedIn
      };
    let stringy = JSON.stringify(addIt);

    console.log(addIt);
    console.log(stringy);
    console.log(JSON.parse(stringy))
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
    let newCSV: string;
    let arr = csvString.split(',');
    console.log(arr)
    let arrObj=[];

    arr.forEach(function(e){
      arrObj.push(JSON.parse(e));
    });

    let found: boolean = false;

    arrObj.forEach(function(element){
      if(element.itemId === itemIdPassedIn) {
        !found;
        return element.quantity += quantityPassedIn;
      }
    });


    if (!found) arrObj.push(
      {
        itemId: itemIdPassedIn,
        quantity: quantityPassedIn
      });
    newCSV = JSON.stringify(arrObj);
    return newCSV;
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

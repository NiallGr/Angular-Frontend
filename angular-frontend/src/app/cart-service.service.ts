import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItems: CartItem[] = [];
 
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(TheCartItem: CartItem){

    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {

        for(let tempCartItem of this.cartItems) {
          if (tempCartItem.id === TheCartItem.id) {
            existingCartItem = tempCartItem;
            break;
          }
        }

        alreadyExistsInCart = (existingCartItem != undefined);
    }
    if (alreadyExistsInCart) {
      existingCartItem.quantity++;
    }
     else {
         this.cartItems.push(TheCartItem);
    }

    this.computeCartTotals()
}  

computeCartTotals() {
    
  let totalPriceValue: number = 0;
  let totalQuantityValue: number = 0;

  for(let currentCartItem of this.cartItems) {
    totalPriceValue =+ currentCartItem.quantity * currentCartItem.price;
    totalQuantityValue =+ currentCartItem.quantity;
  }

  this.totalPrice.next(totalPriceValue);
  this.totalQuantity.next(totalQuantityValue);

  this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    
    console.log('contents of cart');
      for (let tempCartItem of this.cartItems) {
        const subTotalPrice = tempCartItem.quantity * tempCartItem.price;
        console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, price=${tempCartItem.price}, subtotalPrice=${subTotalPrice}`)
      }

      console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuanity: ${totalQuantityValue}`);
      console.log('------')
  
  }
}
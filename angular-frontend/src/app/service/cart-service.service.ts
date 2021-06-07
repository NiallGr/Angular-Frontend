import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

 

  cartItems: CartItem[] = [];
    // BehaviorSubject : So out Checkout componet can subscirbe to the latest Total Price/Quanity (Buffer of the last event)
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  // Session store to stop item removing after brower refresh
  storage: Storage = localStorage;

  constructor() { 
      // Read data from storage 
    let data = JSON.parse(this.storage.getItem('cartItems'));
  
      // compute totals based on the data that is read from storage 
  if (data != null) {
    this.cartItems = data;

      // compute totals based on the data that is read from storage
    this.computeCartTotals();
  }


}
  addToCart(theCartItem: CartItem) {

    // check if there is item in cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {
      // find item in cart based on id

    existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id);

      // check if found
      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if (alreadyExistsInCart) {
      // increment the quantity
      existingCartItem.quantity++;
    }
    else {
      //add the item to the array
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }
 // compute cart total price and total quantity
  computeCartTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    // Publish the new values 
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data Debugging (Console line)
    this.logCartData(totalPriceValue, totalQuantityValue);

    // Perist(store) cart data
    this.persistCardItems();
  }
    // cart item into Json String
    persistCardItems() {
      this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
    }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.price;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.price}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }
      // Decrement Quanity of item in Cart
  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
  }

  //  Remove Item from Shopping Cart
  remove(theCartItem: CartItem) {

    // get index of item in the array
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id );

    // if found remove the item from the array at the designated index
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
    // Compute total
      this.computeCartTotals();
    }
  }
}

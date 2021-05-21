import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

    cartItems : CartItem[] = [];
    totalPrice: number = 0;
    totalQuantity: number = 0;


  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.listCartDetails();
      
    

}  listCartDetails() {
      // get a handle to the cart items
  this.cartItems = this.cartService.cartItems;
      // Subscribe to the cart totalPrice
  this.cartService.totalPrice.subscribe(
    data => this.totalPrice = data
  )
      // subscirbe to the cart totalQuaity 
  this.cartService.totalQuantity.subscribe(
    data => this.totalQuantity = data
  )
    // compute cart total rpcie quantity 
    this.cartService.computeCartTotals();
  }
    // Increment Quanity of item in Cart
    incrementQuantity(theCartItem: CartItem){
      this.cartService.addToCart(theCartItem)
  }
    // Decrement Quanity of item in Cart
  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem)
  }
    // Remove Item from the Shopping Cart 
    remove(theCartItem: CartItem) {
      this.cartService.remove(theCartItem);
    }
}
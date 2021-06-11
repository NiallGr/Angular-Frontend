import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

    totalPrice: number = 0.00;
    totalQuantity: number = 0;


  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }
  // Update Cart
  updateCartStatus() {
    // Total Price updated from subcirbed value 
    this.cartService.totalPrice.subscribe(
       data => this.totalPrice = data
    );
// Total Price updated from subcirbed Quantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}

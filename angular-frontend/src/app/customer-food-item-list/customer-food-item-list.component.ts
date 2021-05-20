import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../cart-item';
import { CartServiceService } from '../cart-service.service';
import {FoodItem} from '../food-item'
import { FooditemService } from '../fooditem.service';



@Component({
  selector: 'app-customer-food-item-list',
  templateUrl: './customer-food-item-list.component.html',
  styleUrls: ['./customer-food-item-list.component.css']
})
export class CustomerFoodItemListComponent implements OnInit {

  foodItem: FoodItem[]

  filters = {
    keyword: ''
  }
  
  constructor(private foodItemService: FooditemService,
    private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getFoodItems();
  }
         getFoodItems() {
          this.foodItemService.getfooditemsList().subscribe(data => {
            this.foodItem = this.filterCustomerFoodItems(data);
          })
        }
        // fillter based on foodGroup
        filterCustomerFoodItems(foodItem: FoodItem[]) {
          return foodItem.filter((e) => {
            return e.foodGroup.toLowerCase().includes(this.filters.keyword.toLowerCase());
          })
        }
        
        addToCart(fooditem: FoodItem) {
            console.log(`Adding to cart: ${fooditem.name} ${fooditem.price}`);

          const TheCartItem = new CartItem(fooditem);
          
            this.cartService.addToCart(TheCartItem);
          
        }
}

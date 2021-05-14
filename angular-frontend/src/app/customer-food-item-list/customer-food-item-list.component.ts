import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FoodItem} from '../food-item'
import { FooditemService } from '../fooditem.service';



@Component({
  selector: 'app-customer-food-item-list',
  templateUrl: './customer-food-item-list.component.html',
  styleUrls: ['./customer-food-item-list.component.css']
})
export class CustomerFoodItemListComponent implements OnInit {

  foodItem: FoodItem[]
  
  constructor(private foodItemService: FooditemService) { }

  ngOnInit(): void {
    this.getFoodItems();
  }
        private getFoodItems() {
          this.foodItemService.getfooditemsList().subscribe(data => {
            this.foodItem = data;
          })
        }

}

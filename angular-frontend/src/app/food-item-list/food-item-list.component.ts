import { Component, OnInit } from '@angular/core';
import {FoodItem} from '../food-item'
import { FooditemService } from '../fooditem.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {


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

        // Testing Array before connecting spring
    // this.foodItem = [{
    //         "id": 1,
    //         "name": "Apple",
    //         "price": 0.65,
    //         "foodGroup": "Fruit"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Beef Steak 200g",
    //         "price": 8.5,
    //         "foodGroup": "Meat"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Chicken 800g",
    //         "price": 8.5,
    //         "foodGroup": "Meat"
    //     }];
    }




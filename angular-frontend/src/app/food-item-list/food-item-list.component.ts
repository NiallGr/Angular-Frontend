import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FoodItem} from '../food-item'
import { FooditemService } from '../fooditem.service';


@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {


    foodItem: FoodItem[] = [];


      filters = {
        keyword: ''
      }
    

  constructor(private foodItemService: FooditemService, private router: Router) { }


  ngOnInit(): void {
      this.getFoodItems();
  }
         getFoodItems() {
          this.foodItemService.getfooditemsList().subscribe(data => {
            this.foodItem = this.filterFoodItems(data);
          })
        }
        // Filter 
        filterFoodItems(foodItem: FoodItem[]) {
          return foodItem.filter((e) => {
            return e.name.toLowerCase().includes(this.filters.keyword.toLowerCase());
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
    updateFoodItem(id: number) {
        this.router.navigate(['update-fooditem', id]);
    }

    deleteFoodItem(id:number) {
        this.foodItemService.deleteFoodItem(id).subscribe(data => {
          console.log(data);
          this.getFoodItems();
        })
    }

    foodItemDetails(id:number) {
      this.router.navigate(['fooditem-details', id]);
    }


    

    }




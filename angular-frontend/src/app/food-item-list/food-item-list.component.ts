import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from '../common/food-item'
import { FooditemService } from '../service/fooditem.service';



@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
  export class FoodItemListComponent implements OnInit {


    foodItem: FoodItem[] = [];


    filters = {
      keyword: '',
      SortBy: 'name'
    }


    constructor(private foodItemService: FooditemService, private router: Router) { }


    ngOnInit(): void {
      this.getFoodItems();
    }
    // Display all food Items
    getFoodItems() {
      this.foodItemService.getfooditemsList().subscribe(data => {
        this.foodItem = this.filterFoodItems(data);
      })
    }
    // Filter based on food item
    filterFoodItems(foodItem: FoodItem[]) {
      return foodItem.filter((e) => {
        return e.name.toLowerCase().includes(this.filters.keyword.toLowerCase());
      })
    }

      // Update food item based on 'ID' selected
      updateFoodItem(id: number) {
        this.router.navigate(['update-fooditem', id]);
      }
      // Delete food Item based on 'ID' selected
      deleteFoodItem(id: number) {
        this.foodItemService.deleteFoodItem(id).subscribe(data => {
          console.log(data);
          this.getFoodItems();
        })
      }
      // View food item based on 'ID' selected
      foodItemDetails(id: number) {
        this.router.navigate(['fooditem-details', id]);
      }


    

    }




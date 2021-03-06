import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from '../common/food-item';
import { FooditemService } from '../service/fooditem.service';


@Component({
  selector: 'app-create-fooditem',
  templateUrl: './create-fooditem.component.html',
  styleUrls: ['./create-fooditem.component.css']
})
export class CreateFooditemComponent implements OnInit {

    fooditem: FoodItem = new FoodItem();

  constructor(private foodItemService: FooditemService, private router: Router) { }

  ngOnInit(): void {
  }
  // Save food item 
    saveFoodItem() {
      this.foodItemService.createFooditem(this.fooditem).subscribe( data => {
        console.log(data);
      },
      error => console.log(error));
    }
  // Navigate back to '/fooditems'
    goToFoodItemList() {
      this.router.navigate(['/fooditems'])
    };

    onSubmit() {
      console.log(this.fooditem)
      this.saveFoodItem();
      this.goToFoodItemList();
    }
}

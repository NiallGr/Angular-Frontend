import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { FoodItem } from '../common/food-item';
import { FooditemService } from '../service/fooditem.service';
import { RouterModule} from '@angular/router'

@Component({
  selector: 'app-fooditem-details',
  templateUrl: './fooditem-details.component.html',
  styleUrls: ['./fooditem-details.component.css']
})
export class FooditemDetailsComponent implements OnInit {

    id:number;
    foodItem: FoodItem;

  constructor(private route: ActivatedRoute, private fooditemService: FooditemService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.foodItem = new FoodItem();
    this.fooditemService.getfoodItemById(this.id).subscribe(data => {
      this.foodItem = data;
    })

  }

}

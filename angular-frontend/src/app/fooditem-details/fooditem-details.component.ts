import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '../food-item';
import { FooditemService } from '../fooditem.service';

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

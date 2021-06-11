import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItem } from '../common/food-item';
import { FooditemService } from '../service/fooditem.service';

@Component({
  selector: 'app-update-fooditem',
  templateUrl: './update-fooditem.component.html',
  styleUrls: ['./update-fooditem.component.css']
})
export class UpdateFooditemComponent implements OnInit {

    id: number;
  fooditem: FoodItem = new FoodItem();
  constructor(private fooditemService: FooditemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // new foodItem object
    this.fooditem = new FoodItem();
    // Assign the ID
    this.id = this.route.snapshot.params['id'];
    // Retreve food Item details
    this.fooditemService.getfoodItemById(this.id).subscribe(data => {
      console.log(data)
      this.fooditem = data;
    }, error => console.log(error));
  }
  updateFoodItem(){
    // Update food item details 
    this.fooditemService.updateFoodItem(this.id, this.fooditem)
    .subscribe((data: any) => {
      console.log(data);
      this.fooditem = new FoodItem();
    }, (error: any) => console.log(error));
    
  }
  // Return to fooditems
  goToFoodItemList() {
    this.router.navigate(['/fooditems'])
  };

  // Delay so database can be updated and results displayed when return to "/fooditems"
  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  onSubmit(){
    // call method
    this.updateFoodItem();
    // return to fooditems
    this.delay(200).then(any => {
      this.goToFoodItemList();
    },
     error => console.log(error));
    
}

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFooditemComponent } from './create-fooditem/create-fooditem.component';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';

const routes: Routes = [
  {path: 'fooditems', component: FoodItemListComponent},
  {path: 'create-fooditem', component: CreateFooditemComponent},
  {path: '', redirectTo: "fooditems", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

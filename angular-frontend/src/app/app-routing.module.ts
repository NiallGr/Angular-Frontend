import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFooditemComponent } from './create-fooditem/create-fooditem.component';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';

const routes: Routes = [
  {path: 'fooditems', component: FoodItemListComponent},
  {path: 'create-fooditem', component: CreateFooditemComponent},
  {path: '', redirectTo: "fooditems", pathMatch: 'full'},
  {path: 'update-fooditem/:id', component: UpdateFooditemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

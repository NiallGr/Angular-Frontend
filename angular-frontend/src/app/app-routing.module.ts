import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';

const routes: Routes = [
  {path: 'fooditems', component: FoodItemListComponent},
  {path: '', redirectTo: "fooditems", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

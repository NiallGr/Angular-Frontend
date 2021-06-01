import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateFooditemComponent } from './create-fooditem/create-fooditem.component';
import { CustomerFoodItemListComponent } from './customer-food-item-list/customer-food-item-list.component';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';
import { FooditemDetailsComponent } from './fooditem-details/fooditem-details.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';



const routes: Routes = [

  {path: 'fooditems', component: FoodItemListComponent},
  {path: 'create-fooditem', component: CreateFooditemComponent},
  
  {path: 'update-fooditem/:id', component: UpdateFooditemComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'fooditem-details/:id', component: FooditemDetailsComponent},
  {path: 'products', component: CustomerFoodItemListComponent},
  {path: '', redirectTo: "products", pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

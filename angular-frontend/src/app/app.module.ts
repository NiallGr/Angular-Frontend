import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';
import { CreateFooditemComponent } from './create-fooditem/create-fooditem.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';
import { FooditemDetailsComponent } from './fooditem-details/fooditem-details.component';
import { CustomerFoodItemListComponent } from './customer-food-item-list/customer-food-item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodItemListComponent,
    CreateFooditemComponent,
    UpdateFooditemComponent,
    FooditemDetailsComponent,
    CustomerFoodItemListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

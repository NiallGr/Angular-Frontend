import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';
import { CreateFooditemComponent } from './create-fooditem/create-fooditem.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';
import { FooditemDetailsComponent } from './fooditem-details/fooditem-details.component';
import { CustomerFoodItemListComponent } from './customer-food-item-list/customer-food-item-list.component';
import { OktaAuthModule } from '@okta/okta-angular';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { LoginStatusComponent } from './login-status/login-status.component';



@NgModule({
  declarations: [
    AppComponent,
    FoodItemListComponent,
    CreateFooditemComponent,
    UpdateFooditemComponent,
    FooditemDetailsComponent,
    CustomerFoodItemListComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    OktaAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateFooditemComponent } from './create-fooditem/create-fooditem.component';
import { CustomerFoodItemListComponent } from './customer-food-item-list/customer-food-item-list.component';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';
import { FooditemDetailsComponent } from './fooditem-details/fooditem-details.component';
import { LoginComponent } from './login/login.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

import myAppConfig from './config/my-app-config';
import { FooditemService } from './service/fooditem.service';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) => {
    const router = injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},

  {path: 'fooditems', component: FoodItemListComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'create-fooditem', component: CreateFooditemComponent, canActivate: [ OktaAuthGuard ]},
  
  {path: 'update-fooditem/:id', component: UpdateFooditemComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'fooditem-details/:id', component: FooditemDetailsComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'products', component: CustomerFoodItemListComponent},
  {path: '', redirectTo: "products", pathMatch: 'full'},
  {path: '**', redirectTo: "products", pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    OktaAuthModule],
  exports: [RouterModule],
  providers: [FooditemService, { provide: OKTA_CONFIG, useValue: oktaConfig }],
})
export class AppRoutingModule { }

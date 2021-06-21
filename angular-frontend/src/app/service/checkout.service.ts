import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Purchase } from '../common/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
// Local host 8081 for localDB 
  private purchaseUrl = "http://localhost:8081/api/checkout/purchase";
  private RemoteURl = "http://Dinnertodinerunning-env.eba-vxjkhwus.ca-central-1.elasticbeanstalk.com/api/checkout/purchase";
  constructor(private httpClient: HttpClient) { 

     
  }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase)

  }
}



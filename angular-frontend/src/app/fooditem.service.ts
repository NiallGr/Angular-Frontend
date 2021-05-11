import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { FoodItem } from './food-item'


@Injectable({
  providedIn: 'root'
})
export class FooditemService {

    private baseURL = "http://localhost:8081/api/v1/foodItems";
  constructor(private httpClient: HttpClient) { }

  getfooditemsList(): Observable<FoodItem[]> {
 return this.httpClient.get<FoodItem[]>(`${this.baseURL}`);
  }

  createFooditem(fooditem: FoodItem): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, fooditem);
  }
}

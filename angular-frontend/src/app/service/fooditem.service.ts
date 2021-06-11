import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { FoodItem } from '../common/food-item'


@Injectable({
  providedIn: 'root'
})
export class FooditemService {

    private baseURL = "http://localhost:8081/api/v1/foodItems";
 
  constructor(private httpClient: HttpClient) { }
    // retrieve items from Backend
  getfooditemsList(): Observable<FoodItem[]> {
 return this.httpClient.get<FoodItem[]>(`${this.baseURL}`);
  }
    // Create item 
  createFooditem(fooditem: FoodItem): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, fooditem);
  }
  // Get food Item by ID from the backend
  getfoodItemById(id: number): Observable<FoodItem>{
    return this.httpClient.get<FoodItem>(`${this.baseURL}/${id}`);
  }
    // updated Item by ID and Inputs
  updateFoodItem(id: number, fooditem: FoodItem): Observable<object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, fooditem);
  }
  // delete item 
  deleteFoodItem(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutFormService {

  constructor() { }
  // Month
  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = []; 

    for (let TheMonth = startMonth; TheMonth <= 12; TheMonth++) {
        data.push(TheMonth)
    }
    return of(data);
  }
  // Year
  getCreditCardYears(): Observable<number[]> {
     let data: number[] = [];

     const startYear: number = new Date().getFullYear();
     const endYear: number = startYear + 10;

     for (let theYear = startYear; theYear <= endYear; theYear++) {
        data.push(theYear);
     }  

     return of(data);
}
}
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutFormService {

  constructor() { }
  // Month
  getCreditCardMonths(startMonth: number): Observable<number[]> {
    //  create array
    let data: number[] = []; 
        // loop 1-12
    for (let TheMonth = startMonth; TheMonth <= 12; TheMonth++) {
        data.push(TheMonth)
    }
    // return array
    return of(data);
  }
  // Year
  getCreditCardYears(): Observable<number[]> {
      // Create Array
     let data: number[] = [];
        // Get present year asign to 'StartYear'
     const startYear: number = new Date().getFullYear();
        // End year is 10 years after start year
     const endYear: number = startYear + 10;
        // loop through and add tp array
     for (let theYear = startYear; theYear <= endYear; theYear++) {
        data.push(theYear);
     }  
      // Return array 
     return of(data);
}
}
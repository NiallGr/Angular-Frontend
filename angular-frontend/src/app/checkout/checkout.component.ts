import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckoutFormService } from '../checkout-form.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

    totalPrice: number = 0;
    totalQuantity: number = 0;

    creditCardYears: number[] = [];
    creditCardMonths: number[] = [];




  constructor(private formBuilder: FormBuilder,
     private checkoutFormMonthAndYear: CheckoutFormService) { }

  ngOnInit(): void {
        // Form Builder assigning Values 
    this.checkoutFormGroup = this.formBuilder.group({
        customer: this.formBuilder.group({
          firstName: [''],
          lastName: [''],
          email: ['']
        }),
        shippingAddress: this.formBuilder.group({
          street: [''],
          city: [''],
          state: [''],
          country: [''],
          zipCode: ['']
        }),
        billingAddress: this.formBuilder.group({
          street: [''],
          city: [''],
          state: [''],
          country: [''],
          zipCode: ['']
        }),
        creditCard: this.formBuilder.group({
          cardType: [''],
          nameOnCard: [''],
          CardNumber: [''],
          securityCode: [''],
          expirationMonth: [''],
          expirationYear: ['']
        })
    });
   // Credit Card Months
    const startMonth: number = new Date().getMonth() + 1;
    console.log("StartMonth:" + startMonth)

    this.checkoutFormMonthAndYear.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retreved credit card months:" + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    );
    // Credit Card Months
      this.checkoutFormMonthAndYear.getCreditCardYears().subscribe(
        data => {
          console.log("Retreaved Credit card year" + JSON.stringify(data));
          this.creditCardYears = data;  
        }
      )
  
      

  }
          // Copy Shipping Address to Billing Address
      copyShippingAddressToBillingAddress(event) {
          if (event.target.checked) {
            this.checkoutFormGroup.controls.billingAddress
            .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
          }
          else {
            this.checkoutFormGroup.controls.billingAddress.reset();
          }
        }
    onSubmit() {
      // testing Purpose
      console.log("handling the submit button")
      console.log(this.checkoutFormGroup.get('customer').value)
      console.log(this.checkoutFormGroup.get('shippingAddress').value)
      console.log(this.checkoutFormGroup.get('billingAddress').value)
      console.log(this.checkoutFormGroup.get('creditCard').value)

    }

        // Make the next year, month start from 1
        handleMonthsAndYears() {

          const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
      
          const currentYear: number = new Date().getFullYear();
          const selectedYear: number = Number(creditCardFormGroup.value.expirationYear);
      
          // if the current year equals the selected year, then start with the current month
      
          let startMonth: number;
      
          if (currentYear === selectedYear) {
            startMonth = new Date().getMonth() + 1;
          }
          else {
            startMonth = 1;
          }
      
          this.checkoutFormMonthAndYear.getCreditCardMonths(startMonth).subscribe(
            data => {
              console.log("Retrieved credit card months: " + JSON.stringify(data));
              this.creditCardMonths = data;
            }
          );
        }
}

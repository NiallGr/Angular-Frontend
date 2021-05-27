import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutFormService } from '../checkout-form.service';
import { CheckoutValidators } from '../checkout-validators';

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
          firstName:  new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          lastName: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          email: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
        }),
        shippingAddress: this.formBuilder.group({
          street: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          city: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          state: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          country: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          zipCode: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace])
        }),
        billingAddress: this.formBuilder.group({
          street: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          city: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          state: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          country: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]),
          zipCode: new FormControl('',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace])
        }),
        creditCard: this.formBuilder.group({
          cardType: ['',[Validators.required]],
          nameOnCard: ['',[Validators.required, Validators.minLength(2), CheckoutValidators.notOnlyWhiteSpace]],
          CardNumber: ['',[Validators.required, Validators.pattern('^[0-9]{16}')]],
          securityCode: ['',[Validators.required, Validators.pattern('^[0-9]{3}')]],
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
      // getter methods 
  get firstName() {return this.checkoutFormGroup.get('customer.firstName');}
  get lastName() {return this.checkoutFormGroup.get('customer.lastName');}
  get email() {return this.checkoutFormGroup.get('customer.email');}
    // Shipping Address Getter
  get shippingAddressstreet() {return this.checkoutFormGroup.get('shippingAddress.street');}
  get shippingAddresscity() {return this.checkoutFormGroup.get('shippingAddress.city');}
  get shippingAddressstate() {return this.checkoutFormGroup.get('shippingAddress.state');}
  get shippingAddresscountry() {return this.checkoutFormGroup.get('shippingAddress.country');}
  get shippingAddresszipCode() {return this.checkoutFormGroup.get('shippingAddress.zipCode');}
    // Billing Address Getter
  get billingAddressstreet() {return this.checkoutFormGroup.get('billingAddress.street');}
  get billingAddresscity() {return this.checkoutFormGroup.get('billingAddress.city');}
  get billingAddressstate() {return this.checkoutFormGroup.get('billingAddress.state');}
  get billingAddresscountry() {return this.checkoutFormGroup.get('billingAddress.country');}
  get billingAddresszipCode() {return this.checkoutFormGroup.get('billingAddress.zipCode');}
  // Credit Cart Getter
  get creditCardType() {return this.checkoutFormGroup.get('creditCard.cardType')}
  get creditCardNameOnCard() {return this.checkoutFormGroup.get('creditCard.nameOnCard')}
  get creditCardNumber() {return this.checkoutFormGroup.get('creditCard.CardNumber')}
  get creditCardSecurityCode() {return this.checkoutFormGroup.get('creditCard.securityCode')}

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
      // Check for invalied fields 
      console.log("handling the submit button")
      if(this.checkoutFormGroup.invalid) {
        this.checkoutFormGroup.markAllAsTouched();
      }
            // testing Purpose
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

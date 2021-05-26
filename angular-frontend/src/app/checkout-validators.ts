import { FormControl, ValidationErrors } from "@angular/forms";

export class CheckoutValidators {
    
    static notOnlyWhiteSpace(control: FormControl) : ValidationErrors {


        // check to see if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {

            // invalid, return error object
            return { 'notOnlyWhiteSpace': true}
        }
            // everything is ok
            else {
                 return null;
            }


}
}

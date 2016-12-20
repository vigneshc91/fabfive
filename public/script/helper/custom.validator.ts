import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

export class CustomValidator {

    static isInvalidEmail(formControl: FormControl ) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        let value = formControl.value;

        if(value && (value.length <= 5 || !EMAIL_REGEXP.test(value)) ) {
            return {
                isInvalidEmail: true 
            };
        }

        return null;
    }

    static isInvalidPhoneNumber(formControl: FormControl){
        let PHONE_REGEXP = /^[0-9]{10,20}$/;
        let value = formControl.value;

        if(value && (value.length <= 5 || !PHONE_REGEXP.test(value))){
            return {
                isInvalidPhoneNumber: true
            };
        }

        return null;
    }
    
}
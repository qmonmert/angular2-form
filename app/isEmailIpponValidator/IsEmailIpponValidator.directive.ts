import {Directive, provide} from 'angular2/core';
import {Control, NG_VALIDATORS, Validator} from 'angular2/common';

@Directive({
    selector: '[isEmailIppon]',
    providers: [provide(NG_VALIDATORS, {useExisting: IsEmailIpponValidator, multi: true})]
})
export class IsEmailIpponValidator implements Validator {
    
    validate(control: Control): any {
        let emailIppon: string = control.value;
        return (emailIppon !== null 
                && emailIppon !== undefined 
                && emailIppon.endsWith('@ippon.fr')) ? null : {notEmailIppon: true};
    }
    
}
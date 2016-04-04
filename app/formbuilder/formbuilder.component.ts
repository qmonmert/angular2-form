import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'form-builder-component',
    templateUrl: 'app/formbuilder/formbuilder.component.html'
})
export class FormBuilderComponent { 
    
    loginForm: ControlGroup;
    email: Control;
    password: Control;
    
    passwordForm: ControlGroup;
    confirm: Control;
    
    constructor(fb: FormBuilder) {
        this.email = fb.control('', Validators.compose([Validators.required, this.isEmailIppon]));
        this.password = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
        this.confirm = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
        this.passwordForm = fb.group({
            password: this.password, 
            confirm: this.confirm
        }, {
            validator: this.passwordMatch
        });
        this.loginForm = fb.group({
            email: this.email,
            passwordForm: this.passwordForm
        });
    }
    
    login() {
        console.log('FormBuilderComponent');
        console.info(this.loginForm.value);
    }
    
    isEmailIppon(control: Control) {
        let emailIppon: string = control.value;
        return (emailIppon !== null 
                && emailIppon !== undefined
                && emailIppon.endsWith('@ippon.fr')) ? null : {notEmailIppon: true};
    }
    
    passwordMatch(control: {controls: {password: Control, confirm: Control}}) {
        let password = control.controls.password.value;
        let confirm = control.controls.confirm.value;
        return password === confirm ? null : {matchingError: true};
    }
    
}

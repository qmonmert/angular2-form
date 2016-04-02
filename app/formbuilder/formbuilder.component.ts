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
    
    constructor(fb: FormBuilder) {
        this.email = fb.control('', Validators.compose([Validators.required]));
        this.password = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
        this.loginForm = fb.group({
           email: this.email,
           password: this.password
        });
    }
    
    login() {
        console.log('FormBuilderComponent');
        console.info(this.loginForm.value);
    }
}

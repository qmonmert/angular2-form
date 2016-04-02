import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Control} from 'angular2/common';

@Component({
    selector: 'form-builder-component',
    templateUrl: 'app/formbuilder/formbuilder.component.html'
})
export class FormBuilderComponent { 
    
    loginForm: ControlGroup;
    
    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
           email:    fb.control(''),
           password: fb.control('') 
        });
    }
    
    login() {
        console.log('FormBuilderComponent');
        console.info(this.loginForm.value);
    }
}

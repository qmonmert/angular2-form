import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Control} from 'angular2/common';

@Component({
    selector: 'form-template-component',
    templateUrl: 'app/formtemplate/formtemplate.component.html'
})
export class FormTemplateComponent { 
    
    login(login) {
        console.log('FormTemplateComponent');
        console.info(login);
    }
    
}

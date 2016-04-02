import {Component} from 'angular2/core';

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

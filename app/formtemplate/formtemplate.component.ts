import {Component}             from 'angular2/core';
import {IsEmailIpponValidator} from '../isEmailIpponValidator/IsEmailIpponValidator.directive';

@Component({
    selector: 'form-template-component',
    templateUrl: 'app/formtemplate/formtemplate.component.html',
    directives: [IsEmailIpponValidator]
})
export class FormTemplateComponent { 
    
    login(login) {
        console.log('FormTemplateComponent');
        console.info(login);
    }
    
}

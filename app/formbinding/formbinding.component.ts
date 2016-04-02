import {Component} from 'angular2/core';
import {User} from '../user/user';
import {IsEmailIpponValidator} from '../isEmailIpponValidator/IsEmailIpponValidator.directive';

@Component({
    selector: 'form-binding-component',
    templateUrl: 'app/formbinding/formbinding.component.html',
    directives: [IsEmailIpponValidator]
})
export class FormBindingComponent { 
    
    user: User = new User();
    
    login() {
        console.log('FormBindingComponent');
        console.info(this.user);
    }
    
}

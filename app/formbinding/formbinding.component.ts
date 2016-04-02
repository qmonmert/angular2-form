import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Control} from 'angular2/common';
import {User} from '../user/user';

@Component({
    selector: 'form-binding-component',
    templateUrl: 'app/formbinding/formbinding.component.html'
})
export class FormBindingComponent { 
    
    user: User = new User();
    
    login() {
        console.log('FormBindingComponent');
        console.info(this.user);
    }
    
}

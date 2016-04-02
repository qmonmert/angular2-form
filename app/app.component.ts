import {Component}             from 'angular2/core';
import {FormBuilderComponent}  from './formbuilder/formbuilder.component';
import {FormTemplateComponent} from './formtemplate/formtemplate.component';
import {FormBindingComponent}  from './formbinding/formbinding.component';

@Component({
    selector: 'my-app',
    template: `<h1>Forms</h1>
               <form-builder-component></form-builder-component>
               <form-template-component></form-template-component>
               <form-binding-component></form-binding-component>`,
    directives: [FormBuilderComponent, FormTemplateComponent, FormBindingComponent]
})
export class AppComponent { }

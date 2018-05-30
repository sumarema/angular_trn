import { Component} from '@angular/core';
import { Employee} from './models/employee';
import {split} from 'ts-node';

@Component({
  selector: 'app-root',
  // template: `<h1> Hello These are my {{name}}</h1>`
  templateUrl: `./home.html`
})

export class AppComponent {
  name: string = 'Angular Forms';
  languages = ['English', 'German', 'Spanish', 'Other'];
  model = new Employee('Sudhindra', 'Maremanda', true, 'Monthly', 'German');
  hasPrimaryLanguageError = false;
  validatePrimaryLanguage(value: string){
    console.log('lang:' + this.model.primaryLanguage);
    if (value === 'default')
    {
     this.hasPrimaryLanguageError = true;
    }
    else
    {
     this.hasPrimaryLanguageError = false;
    }
  }

  firstnameuppercase(value:string){
    if(value.length > 0){
      this.model.firstname = value.charAt(0).toUpperCase() + value.slice(1);
    }
    else
    {
      this.model.firstname = value;
    }
  }
}

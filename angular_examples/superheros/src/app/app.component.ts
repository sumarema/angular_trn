import { Component } from '@angular/core';
import 'rxjs/Rx';

@Component({
    selector: 'superhero-app',
    template: `
      <div><h1> {{ pageTitle }} </h1> Hello World from Angular 5
        <super-heroes></super-heroes>
      </div>       `
})
export class AppComponent {
    pageTitle = 'Indian Super Hero ';
}

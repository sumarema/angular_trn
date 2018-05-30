import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeroListComponent} from './IndianHeros/hero-list.component';
import {FormsModule} from '@angular/forms';
import {HeroFilterPipe} from './IndianHeros/superhero-pipe.component';
import {HeroServices} from './IndianHeros/Hero.services';
import {HttpModule} from '@angular/http';




@NgModule({
  declarations: [
    AppComponent, HeroListComponent, HeroFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule

  ],
  providers: [HeroServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

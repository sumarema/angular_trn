import { Component, OnInit} from '@angular/core';

import { ISuperHero} from './superhero';
import { HeroServices} from './Hero.services';

@Component({
  moduleId: module.id,
  selector: 'super-heroes',
  templateUrl: 'hero-list.component.html'
})

export class HeroListComponent implements OnInit {

  pageTitle: string = 'Indian Super Hero List';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private _heroservice: HeroServices) {
  }
  heroes: ISuperHero[];
  ngOnInit(): void {
  console.log('This Message Comes from LifeCycle')
    this.heroes = this._heroservice.getHeroes();
}

}

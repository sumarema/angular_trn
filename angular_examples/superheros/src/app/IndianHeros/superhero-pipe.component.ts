import { PipeTransform, Pipe} from '@angular/core';

import { ISuperHero} from './superhero';

@Pipe({
  name: 'heroFilter'
})

export class HeroFilterPipe implements PipeTransform {
  transform(value: ISuperHero[], args: string): ISuperHero[] {
    let myresult: string = args ? args.toLocaleLowerCase() : null
    return myresult ? value.filter((hero: ISuperHero) => hero.heroName.toLocaleLowerCase().indexOf(myresult) !== -1) : value;
  }
}

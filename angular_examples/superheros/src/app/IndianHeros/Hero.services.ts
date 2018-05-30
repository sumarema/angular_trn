import { Injectable } from '@angular/core';
import { ISuperHero} from './superhero';
import {createUrlResolverWithoutPackagePrefix} from '@angular/compiler';

import { Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';

@Injectable()

export class HeroServices {
  private _dataUrl = 'http://angularsuperheroservice.azurewebsites.net/api/IndianHeroes';
  constructor(private _http: Http) {
  }
  getHeroes(): Observable<ISuperHero[]> {
    return this._http.get(this._dataUrl)
      .map((myresponse.Response)) => <ISuperHero[]>myrespons.json().do(data => console.log('All: ' + JSON.stringify(data)).catch(this.handleError))
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

import { ApiUrlConstructor } from './api-url-constructor';

@Injectable()
export class HeroesService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private headerOptions = new RequestOptions({ headers: this.headers });

  private limitQuery: number = 9;
  private offset: number = 0;

  constructor(
    private http: Http,
    private url: ApiUrlConstructor
  ) { }

  getHeroById(id: number = 0) {
    if ( id == 0 || id == null || id == undefined ) {
      console.error('Informe um ID Válido');
    }

    return this.http.get( this.url.getHeroById(id), this.headerOptions )
                    .map( response => response.json() );
  }

  getHeroByName(name: string) {
    return this.http.get( this.url.getHeroByName(name), this.headerOptions )
                    .map( response => {response.json(); console.log(response.json());} );
  }

  searchForHero(terms: Observable<string>) {
    return terms.debounceTime(400)
                .distinctUntilChanged()
                .switchMap(term => this.url.getHeroByName( term ) )
  }

}

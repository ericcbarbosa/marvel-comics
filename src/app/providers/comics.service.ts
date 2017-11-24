import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ApiUrlConstructor } from './api-url-constructor';


@Injectable()
export class ComicsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private headerOptions = new RequestOptions({ headers: this.headers });

  private limitQuery: number = 9;
  private offset: number = 0;

  constructor(
    private http: Http,
    private url: ApiUrlConstructor
  ) {}

  getComics(offset: number = this.offset, limit: number = this.limitQuery) {
    return this.http.get( this.url.getComicsUrl(offset, limit), this.headerOptions )
                    .map( response => response.json() );
  }

  getComicsById(id: number = 0) {

    if ( id == 0 || id == null || id == undefined ) {
      console.error('Informe um ID Válido');
      return false;
    }

    return this.http.get( this.url.getComicsByIdUrl(id), this.headerOptions )
                    .map( response => response.json() );
  }

  getComicsByHeroId(id: number = 0) {

    if ( id == 0 || id == null || id == undefined ) {
      console.error('Informe um ID Válido');
      return false;
    }

    return this.http.get( this.url.getComicsByHeroIdUrl(id), this.headerOptions )
                    .map( response => response.json() );
  }
}
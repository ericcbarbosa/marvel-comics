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
  ) { }

  getComics(offset: number = this.offset, limit: number = this.limitQuery) {
    return this.http.get( this.url.getComicsUrl(offset, limit), this.headerOptions )
                    .map( response => response.json() );
  }

  getMockComic() {
    let response = {"id":43092,"digitalId":0,"title":"Brilliant (2011) #7","issueNumber":7,"variantDescription":"","description":"From the award-winning creators behind ULTIMATE SPIDER-MAN and AVENGERS ASSEMBLE comes the shocking creator-owned series that gives you something very different than a regular superhero comic and asks the question: How would the world react if a group of brilliant college students actually discovered the secret of superpowers? Well now, the secret is out!","modified":"2016-05-16T09:04:21-0400","isbn":"","upc":"75960607683300711","diamondCode":"JUN120706","ean":"","issn":"","format":"Comic","pageCount":40,"textObjects":[{"type":"issue_solicit_text","language":"en-us","text":"From the award-winning creators behind ULTIMATE SPIDER-MAN and AVENGERS ASSEMBLE comes the shocking creator-owned series that gives you something very different than a regular superhero comic and asks the question: How would the world react if a group of brilliant college students actually discovered the secret of superpowers? Well now, the secret is out!"}],"resourceURI":"http://gateway.marvel.com/v1/public/comics/43092","urls":[{"type":"detail","url":"http://marvel.com/comics/issue/43092/brilliant_2011_7?utm_campaign=apiRef&utm_source=5e4d7c2657e38bd16e10f2a11af02cde"}],"series":{"resourceURI":"http://gateway.marvel.com/v1/public/series/14803","name":"Brilliant (2011 - Present)"},"variants":[],"collections":[],"collectedIssues":[],"dates":[{"type":"onsaleDate","date":"2020-12-31T00:00:00-0500"},{"type":"focDate","date":"2020-12-17T00:00:00-0500"}],"prices":[{"type":"printPrice","price":3.95}],"thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/b/80/4fb2a4aa018c6","extension":"jpg"},"images":[{"path":"http://i.annihil.us/u/prod/marvel/i/mg/b/80/4fb2a4aa018c6","extension":"jpg"}],"creators":{"available":1,"collectionURI":"http://gateway.marvel.com/v1/public/comics/43092/creators","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/creators/4430","name":"Jeff Youngquist","role":"editor"}],"returned":1},"characters":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/43092/characters","items":[],"returned":0},"stories":{"available":2,"collectionURI":"http://gateway.marvel.com/v1/public/comics/43092/stories","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/stories/96761","name":"Cover #96761","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/96762","name":"Interior #96762","type":"interiorStory"}],"returned":2},"events":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/43092/events","items":[],"returned":0}};
    return response;
  }

  getComicsById(id: number = 43092) {

    if ( id == 0 || id == null || id == undefined ) {
      console.error('Informe um ID Válido');
    }

    return this.http.get( this.url.getComicsByIdUrl(id), this.headerOptions )
                    .map( response => response.json() );
  }

  getComicsByHeroId(id: number = 43092, offset: number = this.offset, limit: number = this.limitQuery) {

    if ( id == 0 || id == null || id == undefined ) {
      console.error('Informe um ID Válido');
    }

    return this.http.get( this.url.getComicsByHeroIdUrl(id, offset, limit), this.headerOptions )
                    .map( response => response.json() );
  }
}
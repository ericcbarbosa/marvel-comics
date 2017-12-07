import { Component, OnInit, ElementRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import { ComicsService } from './../../providers/comics.service';
import { HeroesService } from './../../providers/heroes.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
  providers: [
    ComicsService
  ]
})

export class ComicsComponent implements OnInit {

  pageTitle: string = '';
  pageDescription: string = '';

  // Comics
  private loading: boolean = false;
  private comics: any = [];

  // Query Helpers  
  private queryCounter: number = 0;
  private limit: number = 12;
  private offset: number = this.getQueryOffset();

  // Infinit Scroll
  private scrollConfig = {
    docHeight: document.body.offsetHeight,
    percentage: 60
  }

  constructor(
     private _comicsService: ComicsService,
     private _heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.getMoreRecentComics(this.getQueryOffset(), this.limit);
  }

  getMoreRecentComics(offset: number = 0, limit: number = 6) {
    this.loading = true;

    this._comicsService.getComics(offset, limit)
        .subscribe(
          res => {
            for (let i = 0; i < res.data.results.length; i++ ) {
              this.comics.push(res.data.results[i]);
            }
          },
          err => {
            console.log(err);
          },
          () => {
            this.queryCounter++;
            this.loading = false;
          }
        );
  }

  loadMoreComics() {
    this.getMoreRecentComics(this.getQueryOffset(), this.limit);
  }

  getQueryOffset(): number {
    return this.limit * this.queryCounter;
  }

  onScroll(event) {
    let scrollPos: number = window.scrollY;
    let targetHeight: number = (this.scrollConfig.docHeight * this.scrollConfig.percentage) / 100;

    if (scrollPos > targetHeight)
      this.loadMoreComics();
  }
}

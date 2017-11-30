import { HeroesService } from './../../providers/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import { ComicsService } from './../../providers/comics.service';

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

  private queryCounter: number = 0;
  private limit: number = 6;
  private offset: number = this.getOffset();

  // Heroes
  private heroesId = [
    1009368, // Iron Man
    1009718, // Wolverine
    1011010, // Spider Man
    1009268, // Deadpool
    1009351, // Hulk
  ];

  private heroes = [];

  constructor(
     private _comicsService: ComicsService,
     private _heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.getMoreRecentComics(this.getOffset(), this.limit);
    this.getHighlightHeroes(this.heroesId);
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
    this.getMoreRecentComics(this.getOffset(), this.limit);
  }

  getOffset():number {
    return this.limit * this.queryCounter;
  }

  getHighlightHeroes(heroes) {
    heroes.map(
      hero => {
        this._heroesService
            .getHeroById(hero)
            .subscribe(
              result => {
                console.log(result.data.results[0].thumbnail.path+'.'+result.data.results[0].thumbnail.extension);
                this.heroes.push(result.data.results[0]);
              },
              (error) => console.log(error),
              () => {
                // console.log(this.heroes);
              }
            )
      }
    )
  }
}

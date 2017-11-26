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
  private comics: any;

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
    this.loading = true;
    this.getMoreRecentComics();
    this.getHighlightHeroes(this.heroesId);
  }

  getMoreRecentComics() {
    this._comicsService.getComics(0, 6)
        .subscribe(
          res => {
            this.comics = res.data.results
          },
          err => {
            console.log(err);
          },
          () => {
            this.loading = false;
          }
        );
  }

  getHighlightHeroes(heroes) {
    heroes.map(
      hero => {
        this._heroesService
            .getHeroById(hero)
            .subscribe(
              result => this.heroes.push(result.data.results[0])
            )
      }
    )
  }
}

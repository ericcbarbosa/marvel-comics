import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HeroesService } from './../../../providers/heroes.service';
import { ComicsService } from './../../../providers/comics.service';


@Component({
  selector: 'app-comic-hero',
  templateUrl: './comic-hero.component.html',
  styleUrls: ['./comic-hero.component.scss']
})

export class ComicHeroComponent implements OnInit {

  loading: boolean = false;

  // Page Settings
  pageTitle: string = '';
  pageDescription: string = '';
  heroImage: string = '';

  hero: any;
  heroId: number;
  comics: any = [];

  // Query Helpers
  page: number = 0;
  limit: number = 6;

  // Infinit Scroll
  private scrollConfig = {
    docHeight: document.body.offsetHeight,
    percentage: 60
  }

  getOffset(): number {
    return this.page * this.limit;
  } 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _comicService: ComicsService,
    private _heroService: HeroesService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getHeroId();
  }

  getHeroId(): void {
    this.route.params.subscribe(
      params => {
        this.heroId = params['id'];
        this.getHero();
        this.getComicByHero();
      }
    );
  }

  getHero(): void {
    this._heroService
        .getHeroById( this.heroId )
        .subscribe( result => this.hero = result.data.results[0] );
  }

  setHeaders() {
    this.pageTitle = `${this.hero.name}'s Comics`;
    this.heroImage = `${this.hero.thumbnail.path}.${this.hero.thumbnail.extension}`;
    this.pageDescription = this.hero.description;

    this.loading = false;
  }

  getComicByHero(offset: number = this.getOffset(), limit: number = this.limit): void {
    this._comicService
        .getComicsByHeroId(this.heroId, offset, limit)
        .subscribe(
          result => {
            let resultLength = result.data.results.length;

            for ( let i = 0; i < resultLength; i++ ) {
              this.comics.push(result.data.results[i]);

              if ( i == resultLength - 1 ) {
                this.page++;
                this.loading = false;
              }
            }
          },
          error => console.log(error),
          () => this.setHeaders()
        )
  }

  getMoreComicByHero() {
    this.loading = true;
    this.getComicByHero();
  }

  onScroll(event) {
    let scrollPos: number = window.scrollY;
    let targetHeight: number = (this.scrollConfig.docHeight * this.scrollConfig.percentage) / 100;

    if (scrollPos > targetHeight)
      this.getMoreComicByHero();
  }
}

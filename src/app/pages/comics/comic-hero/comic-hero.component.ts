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

  pageTitle: string = '';
  pageDescription: string = '';
  heroImage: string = '';

  loading: boolean = false;
  hero: any;
  heroId: any;
  comics: any;

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
        console.log(params['id']);
      }
    );
  }

  getComicByHero(): void {
    this._comicService.getComicsByHeroId(this.heroId)
                 .subscribe(
                   result => this.comics = result.data.results,
                   error => console.log(error),
                   () => {
                     this.loading = false;
                     this.setHeaders();
                    }
                 )
  }

  getHero(): void {
    this._heroService.getHeroById(this.heroId)
                     .subscribe(
                       result => this.hero = result.data.results[0],
                       error => console.log(error),
                       () => console.log(this.hero)
                     );
  }

  setHeaders() {
    this.pageTitle = `${this.hero.name}'s Comics`;
    this.pageDescription = this.hero.description;
    this.heroImage = `${this.hero.thumbnail.path}.${this.hero.thumbnail.extension}`;

    this.loading = false;
  }

}

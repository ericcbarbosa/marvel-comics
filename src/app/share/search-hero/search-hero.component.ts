import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

import { HeroesService } from '../../providers/heroes.service';

@Component({
  selector: 'search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
})

export class SearchHeroComponent implements OnInit {

  result$: any;
  searchTerm$ = new Subject<any>();

  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this._heroesService
        .searchForHero(this.searchTerm$)
        .subscribe(results => this.result$ = results.data.results);
  }

  clearResults(elem: any = null) {
    this.result$ = null;

    if ( elem )
      elem.value = '';
  }

  navigateToLink(heroId: number = 0) {
    this.router.navigate(['/comics/hero', heroId])
               .then( () => this.clearResults() );
  }

}

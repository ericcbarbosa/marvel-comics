import { Component, OnInit } from '@angular/core';

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
  private searchTerm$ = new Subject<any>();

  constructor(
    private _heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this._heroesService.searchForHero(this.searchTerm$)
        .subscribe(results => {
          this.result$ = results;
        },
        error => console.log(error),
        () => console.log(this.result$)
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { HeroesService } from '../../providers/heroes.service';

@Component({
  selector: 'highlight-heroes',
  templateUrl: './highlight-heroes.component.html',
  styleUrls: ['./highlight-heroes.component.scss']
})
export class HighlightHeroesComponent implements OnInit {

  @Input() title: string;

  loading = false;

  // Heroes
  heroesId = [
    1009368, // Iron Man
    1009718, // Wolverine
    1011010, // Spider Man
    1009268, // Deadpool
    1009351, // Hulk
  ];
  
  heroes = [];

  constructor(
    private _service: HeroesService
  ) { }

  ngOnInit() {
    this.getHighlightHeroes(this.heroesId);
  }

  getHighlightHeroes(heroes) {
    this.loading = true;
  
    heroes.map(
      (hero, index) => {
        this._service
            .getHeroById(hero)
            .subscribe(
              result => this.heroes.push( result.data.results[0] ),
              error  => console.log(error),
              () => {
                if (this.heroesId.length - 1 == index) {
                  this.loading = false;
                }
              }
            )
      }
    )
  }

}

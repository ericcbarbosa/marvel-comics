import { Observable } from 'rxjs/Rx';
import { ComicsService } from './../../providers/comics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  comics: Observable<any>;

  constructor(
    private _service: ComicsService
  ) { }

  ngOnInit() {
  }

  getMostRecentComics() {
    return this._service.getComics(0, 6)
                        .subscribe((response) => {
                          this.comics = response.data.results;
                        });
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

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

  private loading: boolean = false;
  private comics: Observable<any>;

  constructor(
    private _service: ComicsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.getComics();
  }

  getComics() {
    this._service.getComics()
        .subscribe(
          res => {
            this.comics = res.data.results
          },
          err => {
            console.log(err);
          },
          () => {
            this.loading = false;
            console.log(this.comics);
          }
        );
  }
}

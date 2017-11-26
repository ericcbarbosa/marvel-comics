import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { ComicsService } from './../../../providers/comics.service';


@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})

export class ComicDetailComponent implements OnInit {

  loading: boolean = false;
  comicId: number = 0;
  pageTitle: string = `Marvel Comics :: Detail`;
  pageDescription: string = '';

  comic: any;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private _service: ComicsService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getComicId();
    this.getComicById(this.comicId);
  }

  getComicId() {
    this.route.params.subscribe(params => {
        this.comicId = params['id']
      });
  }

  getComicById(id) {
    return this._service.getComicsById(id)
                        .subscribe(
                          (res) => {
                            this.comic = res.data.results[0];
                            this.pageDescription = res.attributionText;
                            console.log(res);
                          },
                          (error) => console.log(error),
                          () => {
                            this.loading = false;
                            console.log(this.comic);
                          }
                        );
  }

}

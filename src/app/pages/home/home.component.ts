import { Observable } from 'rxjs/Rx';
import { ComicsService } from './../../providers/comics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private comics: any;
  private disclaimer: any;
  private loading: boolean = false;
  private comicsAmount: number = 6;

  constructor(
    private _service: ComicsService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getMostRecentComics();
  }

  getMostRecentComics() {
    return this._service.getComics(0, this.comicsAmount)
                        .subscribe(
                          (response) => {
                            this.disclaimer = response.attributionText;
                            this.comics = response.data.results;
                          },
                          (error) => console.log(error),
                          () => this.loading = false
                        );
  }

}

import { ComicsService } from './../../providers/comics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  disclaimer: string = '';

  constructor(
    private _service: ComicsService
  ) { }

  ngOnInit() {
    this.getDisclaimer()
  }

  getDisclaimer() {
    return this._service.getComics(1, 1)
                .subscribe(res => this.disclaimer = res.attributionText );
  }

}

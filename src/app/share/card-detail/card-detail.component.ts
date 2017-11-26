import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  @Input() comic: any;

  constructor() {}
  ngOnInit() { }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-comic',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() comic: any;

  constructor() { }

  ngOnInit() {
  }

}

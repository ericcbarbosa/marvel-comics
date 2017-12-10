import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-comic',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() comic: any;

  noDescription: string = 'Ops! There is no description for this one yet!';

  constructor() { }

  ngOnInit() {
    console.log(this.comic);
  }

}

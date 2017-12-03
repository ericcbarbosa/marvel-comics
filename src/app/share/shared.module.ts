import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Http, Routing
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Libs
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// Components
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { SearchHeroComponent } from './search-hero/search-hero.component';
import { HighlightHeroesComponent } from './highlight-heroes/highlight-heroes.component';


@NgModule({
  imports: [ 
    CommonModule,
    HttpModule,
    RouterModule,
    LazyLoadImageModule,
    InfiniteScrollModule
  ],
  declarations: [
    CardComponent,
    CardDetailComponent,
    SearchHeroComponent,
    HighlightHeroesComponent
  ],
  exports: [
    CommonModule,
    HttpModule,
    RouterModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    CardComponent,
    CardDetailComponent,
    SearchHeroComponent,
    HighlightHeroesComponent
  ]
})

export class SharedModule { }

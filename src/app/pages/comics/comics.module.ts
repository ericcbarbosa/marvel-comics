import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../../share/shared.module';
import { ComicsRoutingModule } from './comics-routing.module';

// Providers
import { ApiUrlConstructor } from './../../providers/api-url-constructor';
import { HeroesService } from './../../providers/heroes.service';
import { ComicsService } from './../../providers/comics.service';

// Components
import { CardComponent } from '../../share/card/card.component';
import { ComicsComponent } from './comics.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicHeroComponent } from './comic-hero/comic-hero.component';


@NgModule({
  declarations: [
    ComicsComponent,
    ComicDetailComponent,
    ComicHeroComponent
  ],
  imports: [
    SharedModule,
    ComicsRoutingModule
  ],
  providers: [
    ApiUrlConstructor,
    ComicsService,
    HeroesService
  ]
})

export class ComicsModule { }

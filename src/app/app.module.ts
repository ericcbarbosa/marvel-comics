import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Libs
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Providers
import { ApiUrlConstructor } from './providers/api-url-constructor';
import { HeroesService } from './providers/heroes.service';
import { ComicsService } from './providers/comics.service';

// Modules
import { SharedModule } from './share/shared.module';

// Layout
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// Component
import { SearchHeroComponent } from './share/search-hero/search-hero.component';
import { CardComponent } from './share/card/card.component';
import { CardDetailComponent } from './share/card-detail/card-detail.component';
import { HighlightHeroesComponent } from './share/highlight-heroes/highlight-heroes.component';
import { RecentComicsComponent } from './share/recent-comics/recent-comics.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    ApiUrlConstructor,
    HeroesService,
    ComicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

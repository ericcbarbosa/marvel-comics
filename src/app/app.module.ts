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
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicDetailComponent } from './pages/comics/comic-detail/comic-detail.component';
import { ComicHeroComponent } from './pages/comics/comic-hero/comic-hero.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Providers
import { ApiUrlConstructor } from './providers/api-url-constructor';
import { HeroesService } from './providers/heroes.service';
import { ComicsService } from './providers/comics.service';

// Layout
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// Component
import { CardComponent } from './share/card/card.component';
import { CardDetailComponent } from './share/card-detail/card-detail.component';
import { SearchHeroComponent } from './share/search-hero/search-hero.component';
import { HighlightHeroesComponent } from './share/highlight-heroes/highlight-heroes.component';
import { RecentComicsComponent } from './share/recent-comics/recent-comics.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    ComicDetailComponent,
    ComicHeroComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CardDetailComponent,
    SearchHeroComponent,
    HighlightHeroesComponent,
    RecentComicsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    LazyLoadImageModule,
    InfiniteScrollModule
  ],
  providers: [
    ApiUrlConstructor,
    ComicsService,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

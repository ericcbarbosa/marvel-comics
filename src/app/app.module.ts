import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    ComicDetailComponent,
    ComicHeroComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiUrlConstructor,
    ComicsService,
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

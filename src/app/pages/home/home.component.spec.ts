import { ComicsComponent } from './../comics/comics.component';
import { ComicHeroComponent } from './../comics/comic-hero/comic-hero.component';
import { ApiUrlConstructor } from './../../providers/api-url-constructor';
import { ComicsService } from './../../providers/comics.service';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { SharedModule } from './../../share/shared.module';
import { AppRoutingModule } from './../../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesService } from '../../providers/heroes.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        ComicsComponent,
        ComicHeroComponent,
        HomeComponent,
        PageNotFoundComponent
      ],
      providers: [
        ApiUrlConstructor,
        HeroesService,
        ComicsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

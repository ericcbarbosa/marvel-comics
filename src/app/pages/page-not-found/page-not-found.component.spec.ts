import { ComicsService } from './../../providers/comics.service';
import { ApiUrlConstructor } from './../../providers/api-url-constructor';
import { HomeComponent } from './../home/home.component';
import { ComicHeroComponent } from './../comics/comic-hero/comic-hero.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './../../share/shared.module';
import { AppRoutingModule } from './../../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { ComicsComponent } from '../comics/comics.component';
import { HeroesService } from '../../providers/heroes.service';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

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
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

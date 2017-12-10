import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../../app-routing.module';

import { SharedModule } from '../shared.module';

import { ApiUrlConstructor } from '../../providers/api-url-constructor';
import { HeroesService } from '../../providers/heroes.service';
import { ComicsService } from '../../providers/comics.service';

import { CardComponent } from '../card/card.component';
import { HomeComponent } from '../../pages/home/home.component';
import { SearchHeroComponent } from './search-hero.component';
import { PageNotFoundComponent } from '../../pages/page-not-found/page-not-found.component';

describe('SearchHeroComponent', () => {
  let component: SearchHeroComponent;
  let fixture: ComponentFixture<SearchHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        SharedModule,
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        ApiUrlConstructor,
        HeroesService,
        ComicsService,
      ],
      declarations: [
        // CardComponent,
        HomeComponent,
        PageNotFoundComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

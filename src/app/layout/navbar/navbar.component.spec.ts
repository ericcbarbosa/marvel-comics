import { ApiUrlConstructor } from './../../providers/api-url-constructor';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './../../share/shared.module';
import { HttpModule } from '@angular/http';
import { CardComponent } from './../../share/card/card.component';
import { AppRoutingModule } from './../../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './../../pages/home/home.component';
import { PageNotFoundComponent } from '../../pages/page-not-found/page-not-found.component';
import { SearchHeroComponent } from '../../share/search-hero/search-hero.component';
import { HighlightHeroesComponent } from '../../share/highlight-heroes/highlight-heroes.component';
import { HeroesService } from '../../providers/heroes.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpModule,
        AppRoutingModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        NavbarComponent,
        HomeComponent,
        PageNotFoundComponent,
        // SearchHeroComponent,
        // HighlightHeroesComponent,
        // CardComponent,
      ],
      providers: [
        ApiUrlConstructor,
        HeroesService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

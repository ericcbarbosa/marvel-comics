import { PageNotFoundComponent } from './../../page-not-found/page-not-found.component';
import { HomeComponent } from './../../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './../../../share/shared.module';
import { AppRoutingModule } from './../../../app-routing.module';
import { ApiUrlConstructor } from './../../../providers/api-url-constructor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicHeroComponent } from './comic-hero.component';
import { HeroesService } from '../../../providers/heroes.service';
import { ComicsService } from '../../../providers/comics.service';

describe('ComicHeroComponent', () => {
  let component: ComicHeroComponent;
  let fixture: ComponentFixture<ComicHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
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
    fixture = TestBed.createComponent(ComicHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

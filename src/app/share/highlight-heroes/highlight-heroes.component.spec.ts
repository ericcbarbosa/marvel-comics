import { AppRoutingModule } from './../../app-routing.module';
import { SharedModule } from './../shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { ApiUrlConstructor } from './../../providers/api-url-constructor';
import { HomeComponent } from './../../pages/home/home.component';
import { PageNotFoundComponent } from './../../pages/page-not-found/page-not-found.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightHeroesComponent } from './highlight-heroes.component';
import { HeroesService } from '../../providers/heroes.service';

describe('HighlightHeroesComponent', () => {
  let component: HighlightHeroesComponent;
  let fixture: ComponentFixture<HighlightHeroesComponent>;

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
      ],
      declarations: [
        HomeComponent,
        PageNotFoundComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

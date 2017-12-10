import { PageNotFoundComponent } from './../pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../share/shared.module';
import { HttpModule } from '@angular/http';
import { ApiUrlConstructor } from './api-url-constructor';
import { TestBed, inject } from '@angular/core/testing';

import { HeroesService } from './heroes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../pages/home/home.component';

describe('HeroesService', () => {
  beforeEach(() => {
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
    });
  });

  it('should be created', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));
});

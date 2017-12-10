import { ApiUrlConstructor } from './api-url-constructor';
import { HomeComponent } from './../pages/home/home.component';
import { SharedModule } from './../share/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { TestBed, inject } from '@angular/core/testing';

import { ComicsService } from './comics.service';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { HttpModule } from '@angular/http';

describe('ComicsService', () => {
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
        ComicsService,
      ],
      declarations: [
        HomeComponent,
        PageNotFoundComponent,
      ]
    });
  });

  it('should be created', inject([ComicsService], (service: ComicsService) => {
    expect(service).toBeTruthy();
  }));
});

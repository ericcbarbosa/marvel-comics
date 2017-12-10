import { ComicsService } from './../../../providers/comics.service';
import { ApiUrlConstructor } from './../../../providers/api-url-constructor';
import { PageNotFoundComponent } from './../../page-not-found/page-not-found.component';
import { HomeComponent } from './../../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './../../../share/shared.module';
import { AppRoutingModule } from './../../../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailComponent } from './comic-detail.component';

describe('ComicDetailComponent', () => {
  let component: ComicDetailComponent;
  let fixture: ComponentFixture<ComicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [ 
        ComicDetailComponent,
        HomeComponent,
        PageNotFoundComponent,
      ],
      providers: [
        ApiUrlConstructor,
        ComicsService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

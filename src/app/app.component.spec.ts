import { ComicsService } from './providers/comics.service';
import { ApiUrlConstructor } from './providers/api-url-constructor';
import { HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SearchHeroComponent } from './share/search-hero/search-hero.component';
import { HeroesService } from './providers/heroes.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SearchHeroComponent,
      ],
      providers: [
        ApiUrlConstructor,
        HeroesService,
        ComicsService
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a navbar', async(() => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a footer', async(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a search', async(() => {
    const fixture = TestBed.createComponent(SearchHeroComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

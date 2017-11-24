import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicHeroComponent } from './comic-hero.component';

describe('ComicHeroComponent', () => {
  let component: ComicHeroComponent;
  let fixture: ComponentFixture<ComicHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicHeroComponent ]
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

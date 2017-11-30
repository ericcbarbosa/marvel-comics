import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightHeroesComponent } from './highlight-heroes.component';

describe('HighlightHeroesComponent', () => {
  let component: HighlightHeroesComponent;
  let fixture: ComponentFixture<HighlightHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightHeroesComponent ]
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

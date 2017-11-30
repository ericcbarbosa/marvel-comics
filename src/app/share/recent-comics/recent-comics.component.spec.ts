import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentComicsComponent } from './recent-comics.component';

describe('RecentComicsComponent', () => {
  let component: RecentComicsComponent;
  let fixture: ComponentFixture<RecentComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

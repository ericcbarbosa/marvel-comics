import { TestBed, inject } from '@angular/core/testing';

import { ComicsService } from './comics.service';

describe('ComicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicsService]
    });
  });

  it('should be created', inject([ComicsService], (service: ComicsService) => {
    expect(service).toBeTruthy();
  }));
});

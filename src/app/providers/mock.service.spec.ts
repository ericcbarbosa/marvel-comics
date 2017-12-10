import { TestBed, inject } from '@angular/core/testing';

import { MockService } from './mock.service';

describe('MockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockService]
    });
  });

  it('should be created', inject([MockService], (service: MockService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a mock comic object', inject([MockService], (service: MockService) => {
    let comic = service.getMockSingleComic();

    expect(comic).toBeTruthy();
  }));

  it('should have a results length greater than 0', inject([MockService], (service: MockService) => {
    let comics = service.getMockComics();

    let results = comics.data.results;

    expect(results.length).toBeGreaterThan(0);
  }));
});

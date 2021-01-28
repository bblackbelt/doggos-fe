import { TestBed } from '@angular/core/testing';

import { DoggosFetcherService } from './doggos-fetcher.service';

xdescribe('DoggosFetcherService', () => {
  let service: DoggosFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoggosFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

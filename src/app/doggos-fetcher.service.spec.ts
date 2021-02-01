import { TestBed } from '@angular/core/testing';

import { DoggosFetcherService } from './doggos-fetcher.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('DoggosFetcherService', () => {
  let service: DoggosFetcherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]}).compileComponents();
    service = TestBed.inject(DoggosFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

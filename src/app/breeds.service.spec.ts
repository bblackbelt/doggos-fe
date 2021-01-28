import { TestBed } from '@angular/core/testing';

import { BreedsService } from './breeds.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('BreedsService', () => {
  let service: BreedsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]}).compileComponents();

    service = TestBed.inject(BreedsService);
  });

  it('shouldd be created', () => {
    expect(service).toBeTruthy();
  });
});

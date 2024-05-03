import { TestBed } from '@angular/core/testing';

import { PeliApiService } from './peli-api.service';

describe('PeliApiService', () => {
  let service: PeliApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

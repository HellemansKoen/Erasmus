import { TestBed } from '@angular/core/testing';

import { GarbagebinService } from './garbagebin.service';

describe('GarbagebinService', () => {
  let service: GarbagebinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarbagebinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

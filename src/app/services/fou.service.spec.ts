import { TestBed } from '@angular/core/testing';

import { FouService } from './fou.service';

describe('FouService', () => {
  let service: FouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

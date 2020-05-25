import { TestBed } from '@angular/core/testing';

import { GiardinoService } from './giardino.service';

describe('GiardinoService', () => {
  let service: GiardinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiardinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

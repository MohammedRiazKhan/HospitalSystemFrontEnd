import { TestBed } from '@angular/core/testing';

import { VisitService } from './visit.service';

describe('VisitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitService = TestBed.get(VisitService);
    expect(service).toBeTruthy();
  });
});

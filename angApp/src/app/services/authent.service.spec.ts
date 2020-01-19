import { TestBed } from '@angular/core/testing';

import { AuthentService } from './authent.service';

describe('AuthentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentService = TestBed.get(AuthentService);
    expect(service).toBeTruthy();
  });
});

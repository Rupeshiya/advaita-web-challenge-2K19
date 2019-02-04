import { TestBed } from '@angular/core/testing';

import { ValidateServiceService } from './validate-service.service';

describe('ValidateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateServiceService = TestBed.get(ValidateServiceService);
    expect(service).toBeTruthy();
  });
});

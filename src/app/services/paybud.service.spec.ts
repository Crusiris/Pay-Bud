import { TestBed } from '@angular/core/testing';

import { PaybudService } from './paybud.service';

describe('PaybudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaybudService = TestBed.get(PaybudService);
    expect(service).toBeTruthy();
  });
});

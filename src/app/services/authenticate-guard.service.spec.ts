import { TestBed } from '@angular/core/testing';

import { AuthenticateGuard } from './authenticate-guard.service';

describe('AuthenticateGuardService', () => {
  let service: AuthenticateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServiceSistemaService } from './service-sistema.service';

describe('ServiceSistemaService', () => {
  let service: ServiceSistemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSistemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

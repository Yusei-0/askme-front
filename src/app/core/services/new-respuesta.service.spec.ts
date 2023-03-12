import { TestBed } from '@angular/core/testing';

import { NewRespuestaService } from './new-respuesta.service';

describe('NewRespuestaService', () => {
  let service: NewRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

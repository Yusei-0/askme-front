import { TestBed } from '@angular/core/testing';

import { NewPreguntaService } from './new-pregunta.service';

describe('NewPreguntaService', () => {
  let service: NewPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

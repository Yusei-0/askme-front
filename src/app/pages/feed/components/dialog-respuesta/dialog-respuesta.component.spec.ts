import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRespuestaComponent } from './dialog-respuesta.component';

describe('DialogRespuestaComponent', () => {
  let component: DialogRespuestaComponent;
  let fixture: ComponentFixture<DialogRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRespuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

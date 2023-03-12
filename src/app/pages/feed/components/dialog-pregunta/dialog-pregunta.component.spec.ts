import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPreguntaComponent } from './dialog-pregunta.component';

describe('DialogPreguntaComponent', () => {
  let component: DialogPreguntaComponent;
  let fixture: ComponentFixture<DialogPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pregunta } from '../models/Pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class NewPreguntaService {

  private pregunta!: Pregunta;
  private newPregunta = new BehaviorSubject<Pregunta>(
    {
      asignatura: '',
      comentarios: 0,
      descripcion: '',
      fecha: new Date(),
      idp: -1,
      titulo: '',
      votos: 0
    }
  );

  newPregunta$ = this.newPregunta.asObservable();

  constructor() { }
  
  nuevaPregunta( pregunta: Pregunta){
    this.pregunta = pregunta;
    this.newPregunta.next(pregunta);
  }
}

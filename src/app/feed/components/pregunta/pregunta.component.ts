import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from 'src/app/core/models/Pregunta.model';

@Component({
  selector: 'pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input()
  pregunta: Pregunta = {
    asignatura : '',
    descripcion: '',
    fecha : '',
    idp: 0,
    titulo : '',
    votos: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  random(){
    return Math.floor(Math.random()*100%20 );
  }
}
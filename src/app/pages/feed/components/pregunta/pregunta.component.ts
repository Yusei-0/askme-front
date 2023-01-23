import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from 'src/app/core/models/Pregunta.model';
import * as moment from "moment";

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
    fecha : new Date,
    idp: 0,
    titulo : '',
    votos: 0,
    comentarios: 0
  }

  constructor() { }

  ngOnInit(): void {
  }


  getFechaMoment(fecha : Date){

    const now = moment()
    moment.locale("es")
    return moment(fecha).fromNow();
  }

  random(){
    return Math.floor(Math.random()*100%20 );
  }
}

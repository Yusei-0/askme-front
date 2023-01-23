import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pregunta } from '../../core/models/Pregunta.model';
import { getPreguntas } from '../../store/preguntas.store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  preguntas : Pregunta[] = []

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {

    this.preguntas = getPreguntas();
  }

  preguntasPorVotos(){
   
   let preguntasPorVotos = this.preguntas
    
    preguntasPorVotos.sort( (a, b)=> {

      if( a.votos > b.votos) return -1;
      if( a.votos < b.votos) return 1;

      return 0
    })

    return preguntasPorVotos;
  }

  preguntasPorFecha(){
    let preguntasPorFecha = this.preguntas;

    preguntasPorFecha.sort( (a, b)=> {

      if( a.fecha > b.fecha) return -1;
      if( a.fecha < b.fecha) return 1;

      return 0
    })

    return preguntasPorFecha;
  }

  pagination (){
    
  }

}

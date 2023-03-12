import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewPreguntaService } from 'src/app/core/services/new-pregunta.service';
import { NewRespuestaService } from 'src/app/core/services/new-respuesta.service';
import { StoreService } from 'src/app/core/services/store.service';
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
  firstAdd: boolean = false;

  constructor(
    private http : HttpClient,
    private newPreguntaService: NewPreguntaService,
    private newRespuestaService: NewRespuestaService,
    private storeService: StoreService
  ) { 

    newPreguntaService.newPregunta$.subscribe( pregunta =>{
      if(this.firstAdd === false){
        this.firstAdd = true;
        return;
      }
      storeService.addPregunta(pregunta);
    })

    // newRespuestaService.resp$.subscribe( id => {
    //   let resp = storeService.getPreguntas().find( index => index.idp === id) || {
    //     asignatura: '',
    //     comentarios: 0,
    //     descripcion: '',
    //     fecha: new Date(),
    //     idp: -1,
    //     titulo: '',
    //     votos: 0
    //   }

    //   resp.comentarios = resp.comentarios+1;
    //   storeService.editPregunta(id, resp);
    // })

  }

  ngOnInit(): void {

    this.preguntas = this.storeService.getPreguntas();
  }

  preguntasPorVotos(){
   
   let preguntasPorVotos = this.storeService.getPreguntas();
    
    preguntasPorVotos.sort( (a, b)=> {

      if( a.votos > b.votos) return -1;
      if( a.votos < b.votos) return 1;

      return 0
    })

    return preguntasPorVotos;
  }

  preguntasPorFecha(){
    let preguntasPorFecha = this.storeService.getPreguntas();

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

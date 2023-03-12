import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from 'src/app/core/models/Pregunta.model';
import * as moment from "moment";
import { MatDialog } from '@angular/material/dialog';
import { DialogRespuestaComponent } from '../dialog-respuesta/dialog-respuesta.component';
import { NewPreguntaService } from 'src/app/core/services/new-pregunta.service';
import { NewRespuestaService } from 'src/app/core/services/new-respuesta.service';

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

  isLiked= false;

  constructor(
    public dialog: MatDialog,
    private nps: NewRespuestaService
  ) { 

    this.nps.resp$.subscribe( id =>{
      
      if( this.pregunta.idp === id)
        this.pregunta.comentarios++;
    })
  }

  ngOnInit(): void {
  }


  getFechaMoment(fecha : Date){

    const now = moment()
    moment.locale("es")
    return moment(fecha).fromNow();
  }

  votar(){

    if(!this.isLiked){
      this.pregunta.votos++;
      this.isLiked = true;
    }
  
  }

  quitarVoto(){
    if(this.isLiked){
      this.pregunta.votos--;
      this.isLiked = false;
    }
  
  }

  random(){
    return Math.floor(Math.random()*100%20 );
  }

  responder(){
    const dialogRef = this.dialog.open(DialogRespuestaComponent, { 
      data :{
        idp : this.pregunta.idp
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ===1)
      this.pregunta.comentarios++;
    });
  }
}

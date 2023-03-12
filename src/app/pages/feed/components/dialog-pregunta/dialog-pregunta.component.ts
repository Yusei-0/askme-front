import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Pregunta } from 'src/app/core/models/Pregunta.model';
import { NewPreguntaService } from "../../../../core/services/new-pregunta.service";

@Component({
  selector: 'app-dialog-pregunta',
  templateUrl: './dialog-pregunta.component.html',
  styleUrls: ['./dialog-pregunta.component.css']
})
export class DialogPreguntaComponent implements OnInit {

  
    form = this.formBuilder.nonNullable.group({
      titulo : ['', Validators.required ],
      asignatura : ['', Validators.required],
      descripcion : ['', Validators.required]
    })
  constructor(
    private formBuilder : FormBuilder,
    private nuevaPreguntaService: NewPreguntaService,
    public dialogRef: MatDialogRef<DialogPreguntaComponent>,
  ) { }

  ngOnInit(): void {
  }

  nuevaPregunta($event : Event){
    
    $event.preventDefault();
    let pregunta: Pregunta =  {
      asignatura: '',
      comentarios: 0,
      descripcion: '',
      fecha: new Date(),
      idp: -1,
      titulo: '',
      votos: 0
    };

    const {titulo, asignatura, descripcion} = this.form.getRawValue();

    console.log(this.form.getRawValue());
    
    pregunta.titulo = titulo;
    pregunta.asignatura = asignatura;
    pregunta.descripcion = descripcion;
  
    this.nuevaPreguntaService.nuevaPregunta(pregunta);

    this.close();
  }

  close(){
    this.dialogRef.close();
  }
}

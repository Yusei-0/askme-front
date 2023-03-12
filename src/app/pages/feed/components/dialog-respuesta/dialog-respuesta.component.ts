import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewRespuestaService } from "../../../../core/services/new-respuesta.service";

interface DialogData{
  idp : number;
}

@Component({
  selector: 'app-dialog-respuesta',
  templateUrl: './dialog-respuesta.component.html',
  styleUrls: ['./dialog-respuesta.component.css']
})
export class DialogRespuestaComponent implements OnInit {

  form = this.formBuilder.nonNullable.group({
    descripcion : ['', Validators.required ],
  })

  constructor(
    private formBuilder : FormBuilder,
    private newRespuestaService : NewRespuestaService,
    public dialogRef: MatDialogRef<DialogRespuestaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  nuevaRespuesta($event: Event){
    $event.preventDefault();
    console.log(this.data.idp);
    
    this.newRespuestaService.nuevaRespuesta(this.data.idp);
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }
}

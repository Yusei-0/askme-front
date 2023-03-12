import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {

  
  usuariosSugeridos = [
    {
      username : "@joanjmm",
      folowers : 45, 
    },
    {
      username : "@juliojsdk",
      folowers : 34, 
    },
    {
      username : "@mariapas",
      folowers : 42, 
    }
  ]


  entradasBlog = [
    {
      titulo : "Tecnologias del 2023",
      vistas : 84
    },
    {
      titulo : "Uso de las IOT en Cuba",
      vistas : 121
    },
    {
      titulo : "Educación online eficiente",
      vistas : 78
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

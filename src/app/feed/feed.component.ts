import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../core/models/Pregunta.model';
import { getPreguntas } from '../store/preguntas.store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  preguntas : Pregunta[] = []

  constructor() { }

  ngOnInit(): void {

    this.preguntas = getPreguntas()
  }

}

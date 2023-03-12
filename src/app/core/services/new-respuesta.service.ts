import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewRespuestaService {

  private resp = new BehaviorSubject<number>(0);

  resp$ = this.resp.asObservable();

  constructor() { }

  nuevaRespuesta(idp: number){
    this.resp.next(1);
  }
}

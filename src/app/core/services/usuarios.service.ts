import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioDto } from '../dto/Usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiUrl = environment.url_backend

  constructor(
    private http: HttpClient
  ) { }


  getUserByUsername(username : string){
    return this.http.get<UsuarioDto>(`${this.apiUrl}/usuarios/username/${username}`);
  }
}


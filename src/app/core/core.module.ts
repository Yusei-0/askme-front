import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    LoginService,
    UsuariosService
  ]

})
export class CoreModule { }

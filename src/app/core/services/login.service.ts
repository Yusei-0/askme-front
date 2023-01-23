import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDto } from '../dto/Usuario.dto';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn: boolean  = false;
  private userLogged: any;

  constructor(
    private usuariosSevice: UsuariosService,
    private router: Router
  ) { }

  
  IsLoggedIn (){
    return this.loggedIn;
  }

  getUser(){
    if(this.loggedIn)
    return this.userLogged
  }

 async LogIn(username: string, password: string){

    if(password == '' || null || undefined) 
      return false;

    await this.usuariosSevice.getUserByUsername(username)
    .subscribe( user => {

      if(!user) 
        return ;

      console.log(user); 

      this.userLogged = user
      
      if(user.password == password)
      {
        console.log("La contraseña esta bien");
        this.loggedIn = true;
        
      }
      
      if(this.loggedIn){
        this.router.navigate(['/feed']).then(() => false)
      }
      else {
      console.log("Nombre de usuario o Contraseña incorrectos");
  
      }
      console.log("mi pass"+ password+ "    su pas:"+ user.password);
    } )

   

    return this.loggedIn;
  }

}

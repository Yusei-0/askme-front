import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value: any = '';
  form = this.formBuilder.nonNullable.group({
      user : ['', Validators.required ],
      password : ['', Validators.required]
    })

  constructor(
    private formBuilder : FormBuilder,
    private usuariosService: UsuariosService,
    private loginService: LoginService,
    private router : Router
  ){}

  ngOnInit(): void {
  }

  api(){
    console.log(" Hizo click");
    
    this.usuariosService.getUserByUsername("yusei")
    .subscribe( usuario => console.log(usuario))
 
    console.log("Saliendo de la function");
  }

  login(){

    console.log("Me hicieron click");
    const {user, password} = this.form.getRawValue();
    console.log("Credenciales: "+ user + " "+ password);

    this.loginService.LogIn(user, password)
  }
  
}

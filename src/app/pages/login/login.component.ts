import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // usuario='';
  // contraseña='';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    const { url_backend } = environment;
    let loginUserName = this.form.value.user;

    console.log(loginUserName);
    this.router.navigate(['/feed']);
    // let loginUser = this.http.get(`${url_backend}/usuarios/username/${loginUserName}`)

    // console.log(loginUser);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormLg:FormGroup //variable con tipo de dato FormGroup

  constructor(
    private fb:FormBuilder //Clase con un metodo group y le pasamos un objeto con todos los elementos del formulario
  ) { 
    this.FormLg = this.fb.group ({
     
      correo:["", [Validators.email]],
      clave:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]], //Podemos aplicar dos validaciones

    })
  }
  login(){

    console.log(this.FormLg.value)
     }

  ngOnInit(): void {
  }

}

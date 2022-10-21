import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
   miFormulario:FormGroup //variable con tipo de dato FormGroup

  constructor(
    private fb:FormBuilder, //Clase con un metodo group y le pasamos un objeto con todos los elementos del formulario
    private snackbar: MatSnackBar

  ) {

    //Base logica del formulario
      this.miFormulario = this.fb.group ({
      nombre:["", [Validators.required]], // " " valor por defaul es un string vacio * Validators es un subarray al que queremos validar
      apellido:["", [Validators.required]],
      telefono:[""],
      correo:["", [Validators.email]],
      clave:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]], //Podemos aplicar dos validaciones

    })
   }
   registro(){

  console.log(this.miFormulario.value)
   this.snackbar.open ('Gracias por registrarse', 'Cerrar', {duration:3000})
    
   
   }

   //*********A CONTINUACIÓN VAMOS AL HTML PARA ARMAR LA PARTE VISUAL DEL FORMULARIO */

  ngOnInit(): void {
  }

}

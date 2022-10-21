import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../productos.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:any=[]
 

  constructor( 
    private listaProductos:ProductosService,  //esta es una instancia de productos.service.ts *** Inyección de dependencias***
    
  ) { 
    this.listaProductos.getAll()
    .subscribe((datos:any)=> 
      {console.log(datos)
      if (datos.results)  
      this.productos=datos.results
      }
      
      )//cuando tenga la informacion ejecuta la funcion (asincronismo)

     
     

  }

  

  ngOnInit(): void {
  }

}

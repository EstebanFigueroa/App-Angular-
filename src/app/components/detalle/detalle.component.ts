import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto:any

  constructor(
    private activateRoute: ActivatedRoute,
    private productos: ProductosService
  ) { 
    const id = this.activateRoute.snapshot.paramMap.get("id")
    if (id){

      this.productos.getById(id)
      .subscribe(data=>{
        this.producto = data
      })

    }
  
  }

  ngOnInit(): void {
  }

}

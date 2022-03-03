//Un servicio va a ser una clase en la cual vamos a poder definir metodos

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private servidor:HttpClient
   ) { }
  getAll(){

    return this.servidor.get("https://api.mercadolibre.com/sites/MLA/search?q=motos")
  }
}
 
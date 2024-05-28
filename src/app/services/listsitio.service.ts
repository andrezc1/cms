import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listarsitio } from '../models/listarsitio';

@Injectable({
  providedIn: 'root'
})
export class ListsitioService {
  private UrlBase="https://www.corteconstitucional.gov.co/CMS2024Api/api/"

  constructor(private clienteHttp:HttpClient) {
    
  }
  obtenerlistasitios():Observable<Listarsitio[]>{
    return this.clienteHttp.get<Listarsitio[]>(this.UrlBase +"sitios" );
  }
  Agregarsitio(sitio:Listarsitio):Observable<Object>{
    return this.clienteHttp.post(this.UrlBase +"sitios",sitio);
  

  }
}

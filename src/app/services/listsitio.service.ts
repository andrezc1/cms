import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sitio } from '../models/sitio';

@Injectable({
  providedIn: 'root'
})
export class ListsitioService {
  private UrlBase="https://www.corteconstitucional.gov.co/CMS2024Api/api/"

  constructor(private clienteHttp:HttpClient) {
    
  }
  obtenerlistasitios():Observable<Sitio[]>{
    return this.clienteHttp.get<Sitio[]>(this.UrlBase +"sitios" );
  }
  Agregarsitio(sitio:Sitio):Observable<Object>{
    return this.clienteHttp.post(this.UrlBase +"sitios",sitio);
  
    

  }
}

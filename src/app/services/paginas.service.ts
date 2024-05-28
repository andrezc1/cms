import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginas } from '../models/paginas';

@Injectable({
  providedIn: 'root'
})
export class PaginasService {

  private UrlBase="https://www.corteconstitucional.gov.co/CMS2024Api/api/"

  constructor(private clienteHttp:HttpClient) {
    
  }
  obtenerlistapaginas():Observable<Paginas[]>{
    return this.clienteHttp.get<Paginas[]>(this.UrlBase +"paginas" );
  }
  Agregarpagina(pagina:Paginas):Observable<Object>{
    return this.clienteHttp.post(this.UrlBase +"paginas",pagina);
  

  }
}

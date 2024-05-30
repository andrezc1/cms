import { Component } from '@angular/core';
import { Sitio } from '../../models/sitio';
import { ListsitioService } from '../../services/listsitio.service';

@Component({
  selector: 'app-sitio-listar',
  templateUrl: './sitio-listar.component.html',
  styleUrl: './sitio-listar.component.css'
})
export class SitioListarComponent{
    listasitio:Sitio[];
    constructor(private listarsitioServicio: ListsitioService){

    }                
    ngOnInit(){
      //cargamos listas sitios
      this.obtenersitios();
    }
   private obtenersitios(){
    //consumir datos del observable
    this.listarsitioServicio.obtenerlistasitios().subscribe(
    (datos =>{
      this.listasitio=datos;
    })
    );
   }
}

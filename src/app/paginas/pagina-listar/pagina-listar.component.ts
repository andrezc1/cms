import { Component } from '@angular/core';
import { Paginas } from '../../models/paginas';
import { PaginasService } from '../../services/paginas.service';

@Component({
  selector: 'app-pagina-listar',
  templateUrl: './pagina-listar.component.html',
  styleUrl: './pagina-listar.component.css'
})
export class PaginaListarComponent {
  listaPaginas:Paginas[];
  constructor(private listarPaginasServicio: PaginasService){

  }                
  ngOnInit(){
    //cargamos listas sitios
    this.obtenersitios();
  }
 private obtenersitios(){
  //consumir datos del observable
  this.listarPaginasServicio.obtenerlistapaginas().subscribe(
  (datos =>{
    this.listaPaginas=datos;
  })
  );
 }


}

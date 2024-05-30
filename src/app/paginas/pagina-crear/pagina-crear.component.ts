import { Component } from '@angular/core';
import { Paginas } from '../../models/paginas';
import { Router } from '@angular/router';
import { PaginasService } from '../../services/paginas.service';
import { Sitio } from '../../models/sitio';
import { ListsitioService } from '../../services/listsitio.service';

@Component({
  selector: 'app-pagina-crear',
  templateUrl: './pagina-crear.component.html',
  styleUrl: './pagina-crear.component.css'
})
export class PaginaCrearComponent {
  listasitio:Sitio[];

  crearpagina: Paginas = new Paginas();
  constructor(
    private crearpaginaServicio: PaginasService,
    private listarsitioServicio: ListsitioService,
    private router: Router
  ) {}
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
  onSubmit() {
    this.guardarpagina();
  }
  guardarpagina() {
    this.crearpaginaServicio.Agregarpagina(this.crearpagina).subscribe({
      next: (datos) => {
        this.irpagina();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  irpagina(){
    this.router.navigate(['/listarpagina']);
  }

}

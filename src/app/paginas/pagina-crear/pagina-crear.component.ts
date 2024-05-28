import { Component } from '@angular/core';
import { Paginas } from '../../models/paginas';
import { Router } from '@angular/router';
import { PaginasService } from '../../services/paginas.service';

@Component({
  selector: 'app-pagina-crear',
  templateUrl: './pagina-crear.component.html',
  styleUrl: './pagina-crear.component.css'
})
export class PaginaCrearComponent {
  crearpagina: Paginas = new Paginas();
  constructor(
    private crearpaginaServicio: PaginasService,
    private router: Router
  ) {}
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

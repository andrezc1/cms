import { Component } from '@angular/core';
import { Sitio } from '../../models/sitio';
import { ListsitioService } from '../../services/listsitio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitio-crear',
  templateUrl: './sitio-crear.component.html',
  styleUrl: './sitio-crear.component.css',
})
export class SitioCrearComponent {
  crearsitio: Sitio = new Sitio();

  constructor(
    private crearsitioServicio: ListsitioService,
    private router: Router
  ) {}
  onSubmit() {
    this.guardarsitio();
  }
  guardarsitio() {
    this.crearsitioServicio.Agregarsitio(this.crearsitio).subscribe({
      next: (datos) => {
        
        this.irsitios();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  irsitios(){
    this.router.navigate(['/listarsitio']);
  }
  
}

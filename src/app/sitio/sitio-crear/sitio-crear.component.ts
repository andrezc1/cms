import { Component } from '@angular/core';
import { Listarsitio } from '../../models/listarsitio';
import { ListsitioService } from '../../services/listsitio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitio-crear',
  templateUrl: './sitio-crear.component.html',
  styleUrl: './sitio-crear.component.css',
})
export class SitioCrearComponent {
  crearsitio: Listarsitio = new Listarsitio();

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

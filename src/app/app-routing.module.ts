import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitioListarComponent } from './sitio/sitio-listar/sitio-listar.component';
import { SitioCrearComponent } from './sitio/sitio-crear/sitio-crear.component';
import { PaginaListarComponent } from './paginas/pagina-listar/pagina-listar.component';
import { PaginaCrearComponent } from './paginas/pagina-crear/pagina-crear.component';

const routes: Routes = [
  {path:'',redirectTo: 'listarsitio',pathMatch:'full'},
  {path:'listarsitio',component:SitioListarComponent},
  {path:'crearsitio', component:SitioCrearComponent},
  {path:'listarpagina',component:PaginaListarComponent},
  {path:'crearpagina', component:PaginaCrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

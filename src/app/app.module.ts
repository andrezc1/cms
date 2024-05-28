import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitioListarComponent } from './sitio/sitio-listar/sitio-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { SitioCrearComponent } from './sitio/sitio-crear/sitio-crear.component';
import { FormsModule } from '@angular/forms';
import { PaginaCrearComponent } from './paginas/pagina-crear/pagina-crear.component';
import { PaginaListarComponent } from './paginas/pagina-listar/pagina-listar.component';


@NgModule({
  declarations: [
    AppComponent,
    SitioListarComponent,
    SitioCrearComponent,
    PaginaCrearComponent,
    PaginaListarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

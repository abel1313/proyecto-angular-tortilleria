import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


import { FooterSistemComponent } from './Vista/Footer/footer-sistem/footer-sistem.component';
import { PaginaNoEncontradaComponent } from './Vista/PaginaNoEncontrada/pagina-no-encontrada/pagina-no-encontrada.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionSistemaComponent } from './Vista/Navegacion/navegacion-sistema/navegacion-sistema.component';
import { HomeSistemaComponent } from './Vista/Home/home-sistema/home-sistema.component';
import { ServiceSistemaService } from './Service/service-sistema.service';








@NgModule({
  declarations: [
    AppComponent,
    FooterSistemComponent,
    PaginaNoEncontradaComponent,
    NavegacionSistemaComponent,
    HomeSistemaComponent,
 
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [ServiceSistemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

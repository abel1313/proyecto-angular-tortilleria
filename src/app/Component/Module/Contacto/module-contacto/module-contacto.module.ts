import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleContactoRoutingModule } from './module-contacto-routing.module';
import { ContactoSistemaComponent } from 'src/app/Vista/Contacto/contacto-sistema/contacto-sistema.component';
import { ContactoMensajesComponent } from 'src/app/Vista/Contacto/Mensajes/contacto-mensajes/contacto-mensajes.component';
import { ModuleAngularMaterialModule } from '../../module-angular-material/module-angular-material.module';
import { ContactoHeaderComponent } from 'src/app/Vista/Contacto/ContactoHeader/contacto-header/contacto-header.component';
import { ContactoBodyComponent } from 'src/app/Vista/Contacto/ContactoBody/contacto-body/contacto-body.component';
import { ContactoFooterComponent } from 'src/app/Vista/Contacto/ContactoFooter/contacto-footer/contacto-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [
    ContactoSistemaComponent,
    ContactoMensajesComponent,
    ContactoHeaderComponent,
    ContactoBodyComponent,
    ContactoFooterComponent,
  ],
  imports: [
    CommonModule,
    ModuleContactoRoutingModule,
    ModuleAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModuleContactoModule { }

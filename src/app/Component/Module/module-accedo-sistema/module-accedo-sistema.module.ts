import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAccedoSistemaRoutingModule } from './module-accedo-sistema-routing.module';
import { AccesoSistemaComponent } from 'src/app/Vista/AccesoSistema/acceso-sistema/acceso-sistema.component';
import { RegistrarSistemaComponent } from 'src/app/Vista/AccesoSistema/registrar-sistema/registrar-sistema.component';
import { ModuleAngularMaterialModule } from '../module-angular-material/module-angular-material.module';




@NgModule({
  declarations: 
  [
    AccesoSistemaComponent,
    RegistrarSistemaComponent
  ],
  imports: [
    CommonModule,
    
    ModuleAccedoSistemaRoutingModule,
    ModuleAngularMaterialModule,
  ],
  schemas:
  [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ModuleAccedoSistemaModule { }

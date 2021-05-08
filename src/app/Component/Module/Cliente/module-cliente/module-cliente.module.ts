import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleClienteRoutingModule } from './module-cliente-routing.module';
import { AgregarClienteComponent } from 'src/app/Vista/Cliente/agregar-cliente/agregar-cliente.component';
import { ModulePersonaModule } from '../../Persona/module-persona/module-persona.module';

import { ModuleAngularMaterialModule } from '../../module-angular-material/module-angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleDireccionModule } from '../../Direccion/module-direccion/module-direccion.module';
import { ExampleClienteComponent } from 'src/app/Vista/Cliente/example-cliente/example-cliente.component';


@NgModule({
  declarations: 
  [
    AgregarClienteComponent,
    ExampleClienteComponent,

 
  ],
  imports: [
    CommonModule,
    ModuleClienteRoutingModule,
    ModulePersonaModule,
    ModuleDireccionModule,
    ModuleAngularMaterialModule,
    ReactiveFormsModule
  ],
  schemas:
  [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ModuleClienteModule { }

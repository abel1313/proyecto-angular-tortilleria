import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleVentaRoutingModule } from './module-venta-routing.module';
import { ModuleAngularMaterialModule } from '../../module-angular-material/module-angular-material.module';
import { NuevaVentaComponent } from 'src/app/Vista/Ventas/NuevaVenta/nueva-venta/nueva-venta.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [
    NuevaVentaComponent,
  ],

  imports: [
    CommonModule,
    ModuleVentaRoutingModule,
    ModuleAngularMaterialModule,
    ReactiveFormsModule,
  ],
  schemas:
  [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ModuleVentaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarDireccionComponent } from 'src/app/Vista/Direccion/n/agregar-direccion/agregar-direccion.component';
import { ModuleAngularMaterialModule } from '../../module-angular-material/module-angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: 
  [
    AgregarDireccionComponent,
  ],
  imports: [
    CommonModule,
    ModuleAngularMaterialModule,
    ReactiveFormsModule,
  ],
  exports:
  [
    AgregarDireccionComponent,
  ]
})
export class ModuleDireccionModule { }

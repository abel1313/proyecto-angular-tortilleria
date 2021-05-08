import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPersonaComponent } from 'src/app/Vista/Personas/DatosPersonas/datos-persona/datos-persona.component';
import { ModuleAngularMaterialModule } from '../../module-angular-material/module-angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: 
  [
    DatosPersonaComponent,
  ],
  imports: [
    CommonModule,
    ModuleAngularMaterialModule,
    ReactiveFormsModule,
  ],
  exports: 
  [
DatosPersonaComponent,
  ]
})
export class ModulePersonaModule { }

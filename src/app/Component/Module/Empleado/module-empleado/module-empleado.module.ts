import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModuleEmpleadoRoutingModule } from './module-empleado-routing.module';
import { NuevoEmpleadoComponent } from 'src/app/Vista/Empleados/AgregarEmpleado/nuevo-empleado/nuevo-empleado.component';
import { BuscarEmpleadoComponent } from 'src/app/Vista/Empleados/BuscarEmpleado/buscar-empleado/buscar-empleado.component';
import { MostrarEmpleadoComponent } from 'src/app/Vista/Empleados/MostrarEmpleado/mostrar-empleado/mostrar-empleado.component';
import { NavEmpleadoComponent } from 'src/app/Vista/Empleados/NavEmpleados/nav-empleado/nav-empleado.component';
import { ModuleAngularMaterialModule } from '../../module-angular-material/module-angular-material.module';
import { EmpleadosComponent } from 'src/app/Vista/Empleados/Empleados/empleados/empleados.component';
import { DatosPersonaComponent } from 'src/app/Vista/Personas/DatosPersonas/datos-persona/datos-persona.component';


@NgModule({
  declarations: 
  [
    NuevoEmpleadoComponent,
    BuscarEmpleadoComponent,
    MostrarEmpleadoComponent,
    NavEmpleadoComponent,
    EmpleadosComponent,
    
    

  ],
  imports: [
    CommonModule,
    ModuleEmpleadoRoutingModule,
  
  ]
})
export class ModuleEmpleadoModule { }

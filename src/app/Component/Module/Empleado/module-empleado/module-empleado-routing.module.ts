import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoEmpleadoComponent } from 'src/app/Vista/Empleados/AgregarEmpleado/nuevo-empleado/nuevo-empleado.component';

import { EmpleadosComponent } from 'src/app/Vista/Empleados/Empleados/empleados/empleados.component';


const routes: Routes = 
[
  { path: '', component: EmpleadosComponent },
  { path: 'nuevo', component: NuevoEmpleadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEmpleadoRoutingModule { }

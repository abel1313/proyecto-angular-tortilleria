import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from 'src/app/Vista/Cliente/agregar-cliente/agregar-cliente.component';

const routes: Routes = 
[
  { path: 'nuevo', component: AgregarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleClienteRoutingModule { }

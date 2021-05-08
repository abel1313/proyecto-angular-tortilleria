import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoSistemaComponent } from 'src/app/Vista/AccesoSistema/acceso-sistema/acceso-sistema.component';

const routes: Routes = 
[
  { path: 'acceso', component: AccesoSistemaComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAccedoSistemaRoutingModule { }

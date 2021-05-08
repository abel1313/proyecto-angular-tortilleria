import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoSistemaComponent } from 'src/app/Vista/Contacto/contacto-sistema/contacto-sistema.component';

const routes: Routes = 
[
  { path: 'contacto', component: ContactoSistemaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleContactoRoutingModule { }

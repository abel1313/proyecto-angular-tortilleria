import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaVentaComponent } from 'src/app/Vista/Ventas/NuevaVenta/nueva-venta/nueva-venta.component';

const routes: Routes = 
[
  { path: 'nueva', component: NuevaVentaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleVentaRoutingModule { }

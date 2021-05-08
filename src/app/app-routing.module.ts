import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSistemaComponent } from './Vista/Home/home-sistema/home-sistema.component';
import { PaginaNoEncontradaComponent } from './Vista/PaginaNoEncontrada/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = 
[
  {
    path: 'sistema',
    loadChildren: ()=> import( './Component/Module/module-accedo-sistema/module-accedo-sistema.module' ).then( m=>m.ModuleAccedoSistemaModule )
  },
  {
    path: 'sistema',
    loadChildren: ()=> import('./Component/Module/Contacto/module-contacto/module-contacto.module').then( m=>m.ModuleContactoModule )
  },
  {
    path: 'empleado',
    loadChildren: ()=> import('./Component/Module/Empleado/module-empleado/module-empleado.module').then( m=>m.ModuleEmpleadoModule )
  },
  {
    path: 'cliente',
    loadChildren: ()=> import('./Component/Module/Cliente/module-cliente/module-cliente.module').then( m=>m.ModuleClienteModule )
  },
  {
    path: 'venta',
    loadChildren: ()=> import('./Component/Module/Venta/module-venta/module-venta.module').then( m=>m.ModuleVentaModule )
  },
  { path: 'home', component: HomeSistemaComponent },
  // { path: '', redirectTo: 'sistema/acceso', pathMatch: 'full'  },
  { path: '', redirectTo: 'sistema/contacto', pathMatch: 'full'  },
  { path: '**', component: PaginaNoEncontradaComponent  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

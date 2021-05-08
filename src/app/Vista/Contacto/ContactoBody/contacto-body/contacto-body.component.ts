import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceSistemaService } from 'src/app/Service/service-sistema.service';

@Component({
  selector: 'app-contacto-body',
  templateUrl: './contacto-body.component.html',
  styleUrls: ['./contacto-body.component.css']
})
export class ContactoBodyComponent implements OnInit {

  constructor( private service: ServiceSistemaService ) { }

  mensajeBody: string[] = [];

  obtenerEventoMensaje: Observable<string>;

  ngOnInit(): void 
  {
    
    this.obtenerEventoMensaje =  this.service.mensajeContacto$;
    this.obtenerEventoMensaje
    .subscribe
    (
       (mensaje: string )=>
       {
        this.mensajeBody.push( mensaje );
        
       }
       
    );
    
    



  }

}

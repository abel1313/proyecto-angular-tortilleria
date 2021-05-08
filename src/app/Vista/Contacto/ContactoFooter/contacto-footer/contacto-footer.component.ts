import { Component, OnInit } from '@angular/core';
import { ServiceSistemaService } from 'src/app/Service/service-sistema.service';

@Component({
  selector: 'app-contacto-footer',
  templateUrl: './contacto-footer.component.html',
  styleUrls: ['./contacto-footer.component.css']
})
export class ContactoFooterComponent implements OnInit {

  constructor( private service: ServiceSistemaService ) { }

  
  ngOnInit(): void 
  {
  }

  enviarMensaje( value: any): void
  {

    console.log( value, ' value');
  //  this.service.getMensaje().subscribe( res=> console.log('mensake ', res));




  }

}

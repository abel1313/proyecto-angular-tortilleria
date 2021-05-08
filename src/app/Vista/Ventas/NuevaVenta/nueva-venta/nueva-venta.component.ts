import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.css']
})
export class NuevaVentaComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  


  
  profileForm = this.fb.group
  ({
    precioKiloForm: ['', [Validators.required,Validators.pattern('^[0-9]+([.][0-9]{1,2})?$')] ],
    seleccioneOpcion: ['$pesos', Validators.required]
  });

  precioKilo: number = 24;
  totalVenta: number = 0;
  sesionSistema: Boolean = true;

  soloNumerosDecimales: string = '^[0-9]+([.][0-9]{1,2})?$';
  soloNumeros: string = "^[0-9]+";
  soloLetras="[a-zA-Z ]{2,254}"

  ngOnInit(): void 
  {

//this.sesionSistema = sessionStorage.getItem('sessionUsuario') != null ? true : false ;
  }





  cambiandoPrecio( event: number )
  {
    // validar si esta seleccionado el precio o kg para realizar las cuentas
    const valorSelect = this.profileForm.get('seleccioneOpcion').value;

    if( valorSelect == '$pesos' )
    {
      this.totalVenta = event;
    }else if( valorSelect == 'kg' )
    {
      this.totalVenta = this.precioKilo * event ;
    }  
  }
  cambiandoValor( value: string)
  {
    if( value == '$pesos' )
    {
      this.totalVenta = this.profileForm.get('precioKiloForm').value;
    }else if( value == 'kg' )
    {
      this.totalVenta = this.precioKilo * this.profileForm.get('precioKiloForm').value ;
    }  
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}

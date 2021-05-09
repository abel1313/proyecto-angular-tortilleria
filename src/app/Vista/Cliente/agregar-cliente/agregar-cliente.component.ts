import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IPersona } from "../../../Model/Persona/IPersona";
import { IDireccion } from 'src/app/Model/Direccion/IDireccion';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AgregarClienteComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  


  // secondFormGroup: FormGroup;

  // profileForm = this.fb.group({});
  // firstFormGroup = this.fb.group({});

  datosPersonaForm = this.fb.group({});
  datosDireccionForm = this.fb.group({});

  mensaje: string = '';
  mostrarMensaje: Boolean = false;
  ngOnInit(): void 
  {

  }

  onSubmit( e: any ): void
  {
    e.preventDefault();

    if( this.datosPersonaForm.valid && this.datosDireccionForm.valid )
    {

      const direccion: IDireccion = this.datosDireccionForm.value;
      const persona: IPersona = this.datosPersonaForm.value;
      
      persona.direccion = direccion;


      console.log( persona , 'valores');
    }
    else {
      {
        this.mostrarMensaje = !this.mostrarMensaje;
        this.mensaje = "llene los campos faltantes"

        setTimeout(() => {
          this.mensaje = ""
          this.mostrarMensaje = !this.mostrarMensaje;
         
        }, 1500);
      }}
 

  }

}



import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  
  secondFormGroup: FormGroup;

  profileForm = this.fb.group({});
  firstFormGroup = this.fb.group({});

  datosPersonaForm = this.fb.group({});
  datosDireccion = this.fb.group({});

  ngOnInit(): void 
  {

    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
   
  }

  onSubmit(): void
  {
    let dato = this.profileForm.get('nombrePersona').value;

    console.log( dato, ' dato');
  }

}

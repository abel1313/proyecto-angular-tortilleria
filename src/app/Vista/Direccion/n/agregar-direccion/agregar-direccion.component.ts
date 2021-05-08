import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-direccion',
  templateUrl: './agregar-direccion.component.html',
  styleUrls: ['./agregar-direccion.component.css']
})
export class AgregarDireccionComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  @Input() datosDireccion: FormGroup;

  soloNumerosDecimales: string = '^[0-9]+([.][0-9]{1,2})?$';
  soloNumeros: string = "^[0-9]+";
  soloLetras: string ="[a-zA-Z ]{2,254}";
  soloLetrasNumeros: string ="[a-zA-Z ]{2,10}";
  correo: string = "[a-zA-Z0-9!#$%&'*_+-]([\\\\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\\\\/()=?¿!.,:;]|\\\\d)+[a-zA-Z0-9][\\\\.][a-zA-Z]{2,4}([\\\\.][a-zA-Z]{2})?";


  ngOnInit(): void 
  {
     this.datosDireccionInit();

  }

  datosDireccionInit(): void
  {
    this.datosDireccion.addControl('calleDireccion', new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]{2,254}")]));
    this.datosDireccion.addControl('coloniaDireccion', new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]{2,254}")]));
    this.datosDireccion.addControl('postalDireccion', new FormControl('', [Validators.required, Validators.pattern( this.soloLetras)]));
    this.datosDireccion.addControl('interiorDireccion', new FormControl('', [Validators.required, Validators.pattern( this.soloLetrasNumeros )]));

    this.datosDireccion.addControl
    (
      'numeroExterior', new FormControl
      ('', 
      [Validators.required, 
        Validators.pattern(this.soloLetrasNumeros),
        Validators.minLength(2),
        Validators.maxLength(10),

      ])
    );
  }

}

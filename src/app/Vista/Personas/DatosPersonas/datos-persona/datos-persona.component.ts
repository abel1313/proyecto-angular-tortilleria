import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css']
})
export class DatosPersonaComponent implements OnInit {

  constructor( private fb:FormBuilder ) { }

  @Input() datosForm: FormGroup;

  soloNumerosDecimales: string = '^[0-9]+([.][0-9]{1,2})?$';
  soloNumeros: string = "^[0-9]+";
  soloLetras="[a-zA-Z ]{2,254}";
  correo: string = "[a-zA-Z0-9!#$%&'*_+-]([\\\\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\\\\/()=?¿!.,:;]|\\\\d)+[a-zA-Z0-9][\\\\.][a-zA-Z]{2,4}([\\\\.][a-zA-Z]{3})?";

  ngOnInit(): void 
  {

    this.datosPersonaInit();
  }

  datosPersonaInit(): void
  {
    this.datosForm.addControl('nombrePersona', new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]{2,254}")]));
    this.datosForm.addControl('paterno', new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]{2,254}")]));
    this.datosForm.addControl('materno', new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]{2,254}")]));
    this.datosForm.addControl('correo', new FormControl('', [Validators.required, Validators.pattern( this.correo )]));

    this.datosForm.addControl
    (
      'telefono', new FormControl
      ('', 
      [Validators.required, 
        Validators.pattern(this.soloNumeros),
        Validators.minLength(10),
        Validators.maxLength(10),

      ])
    );
  }

}

// this.formPersona = this.fb.group
// ({
//   nombrePersona: ['', Validators.required ],
//   apePersona: ['', Validators.required ]
// });

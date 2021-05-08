import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-cliente',
  templateUrl: './example-cliente.component.html',
  styleUrls: ['./example-cliente.component.css']
})
export class ExampleClienteComponent implements OnInit {

  constructor(  ) { }

 @Input()datosUno: FormGroup;

  ngOnInit(): void 
  {

   this.datosUno.addControl('firstCtrl', new FormControl('', [ Validators.required ]));

   

  }

}

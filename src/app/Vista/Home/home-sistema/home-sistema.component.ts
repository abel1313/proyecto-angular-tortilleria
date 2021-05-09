import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';


@Component({
  selector: 'app-home-sistema',
  templateUrl: './home-sistema.component.html',
  styleUrls: ['./home-sistema.component.css']
})
export class HomeSistemaComponent implements OnInit {

  constructor() { }

  url: string = 'https://proyecto-abel-e1fu6mli5-abel1313.vercel.app/venta/nueva';
  urlSetting: string = 'https://proyecto-abel-7mzakf1gu-abel1313.vercel.app';
  profile = 'app-nueva'
  title = 'codigo-qr';
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel =  NgxQrcodeErrorCorrectionLevels;
  value = this.urlSetting;
  
  ngOnInit(): void 
  {

  }

}

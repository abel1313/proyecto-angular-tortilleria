import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ServiceSistemaService 
{

  constructor( private http: HttpClient) { }

  mensajeContacto$ = new EventEmitter<string>();


  getMensaje()
  {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get(`${environment.URL}/contacto/mensaje`, requestOptions );
  }
}

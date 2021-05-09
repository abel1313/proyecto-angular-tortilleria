import { IDatosBase } from "../DatosBase/IDatosBase";
import { IDireccion } from "../Direccion/IDireccion";

 export interface IPersona extends IDatosBase
 {
   
   nombrePersona: string;
   paternoPersona: string;
   maternoPersona: string;
   correoPersona: string;
   telefonoPersona: string;
   direccion: IDireccion
 }
import { IDatosBase } from "../DatosBase/IDatosBase";


export interface IDireccion extends IDatosBase
{
    calleDireccion: string;
    coloniDireccion: string;
    postalDireccion: string;
    interiorDireccion: string;
    exteriorDireccion: string;
}
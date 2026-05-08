import { Roca } from "../models/roca";

export class ValidadorIgneo {

  isValid(roca: Roca): boolean {
    return roca.grupo === 'Ígneas'
      && roca.grano === 'Muy grueso';
  }
}

export class ValidadorMetamorfico {

  isValid(roca: Roca): boolean {
    return roca.grupo === 'Metamórficas'
      && (roca.grano === 'Medio' || roca.grano === 'Fino')
      && roca.textura === 'Vítrea';
  }
}

export class ValidadorSedimentario {

  isValid(roca: Roca): boolean {
    return roca.grupo === 'Sedimentarias'
      && roca.textura === 'Fanerítica';
  }
}
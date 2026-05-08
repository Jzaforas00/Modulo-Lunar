import { IPilotable } from './interfaces';

export class Astronauta implements IPilotable {

  constructor(
    public identificador: string,
    public nombreCompleto: string,
    public edad: number
  ) {}

  dameId(): string {
    return this.identificador;
  }

  dameNombre(): string {
    return this.nombreCompleto;
  }

  dameEdad(): number {
    return this.edad;
  }
}
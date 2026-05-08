import { Astronauta } from "./astronauta";
import { Roca } from "./roca";

export class Mision {

  constructor(
    public piloto: Astronauta,
    public validador: any
  ) {}

  analiza(roca: Roca): boolean {
    return this.validador.isValid(roca);
  }
}
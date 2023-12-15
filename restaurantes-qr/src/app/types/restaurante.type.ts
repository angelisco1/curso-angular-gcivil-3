import { Platos } from "./plato.type"

export class Restaurante {
  constructor(
    public restaurante: string,
    public carta: Platos,
    public id: string | null = null
  ) {
    this.id = restaurante.toLowerCase().replaceAll(' ', '_')
  }

  showDatos() {
    console.log('El restaurante ' + this.restaurante)
  }

}

export type Restaurantes = Array<Restaurante>
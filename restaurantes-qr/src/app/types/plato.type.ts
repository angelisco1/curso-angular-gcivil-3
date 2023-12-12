export class Plato {
  constructor(
    public nombre: string,
    public descripcion: string,
    public precio: number,
    public foto: string,
    public id: string
  ) {
  }
}

export type Platos = Array<Plato>

// new Plato('a', 'b', 1, 'c', 'd')
export type Sugus = {
  sabor: string,
  color: string,
}

export interface SugusConCantidad extends Sugus {
  cantidad: number,
}

const sugusDePinya: SugusConCantidad = {
  cantidad: 2,
  color: 'blue',
  sabor: 'piña'
}
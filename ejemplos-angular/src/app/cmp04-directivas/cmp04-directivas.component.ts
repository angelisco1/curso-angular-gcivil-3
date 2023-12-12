import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp04-directivas',
  templateUrl: './cmp04-directivas.component.html',
  styleUrls: ['./cmp04-directivas.component.css']
})
export class Cmp04DirectivasComponent {
  letraNaranjaActivada: boolean = true
  isAuthenticated: boolean = true

  listaProductos: Array<{ producto: string, cantidad: number }> = [
    { producto: 'Perrito piloto', cantidad: 3 },
    { producto: 'Peluche sonic', cantidad: 2 },
    { producto: 'Laser', cantidad: 4 },
  ]

  listaPaises = ['España', 'Portugal', 'Francia', 'Alemania']
  paisSeleccionado: string = ''

  get clases() {
    return {
      fondoNegro: true,
      letraNaranja: this.letraNaranjaActivada,
    }
  }

  toggleLetraNaranja(activar: boolean) {
    this.letraNaranjaActivada = activar
  }
}

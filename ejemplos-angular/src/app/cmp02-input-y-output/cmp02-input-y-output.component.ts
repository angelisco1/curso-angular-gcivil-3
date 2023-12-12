import { Component } from '@angular/core';
import { Sugus, SugusConCantidad } from '../types/sugus.type';

@Component({
  selector: 'app-cmp02-input-y-output',
  templateUrl: './cmp02-input-y-output.component.html',
  styleUrls: ['./cmp02-input-y-output.component.css']
})
export class Cmp02InputYOutputComponent {
  saborDinamico = 'sorpresa'
  colorDinamico = 'black'
  carritoSugus: Array<SugusConCantidad> = []

  cambiarColor(event: Event) {
    this.colorDinamico = (event.target as HTMLInputElement).value
  }

  addToCart(sugus: Sugus) {
    const sugusBuscado = this.carritoSugus.find((item) => {
      return item.sabor === sugus.sabor
    })

    if (sugusBuscado) {
      sugusBuscado.cantidad++
    } else {
      this.carritoSugus.push({ ...sugus, cantidad: 1 })
    }
  }
}

// {
//   sabor: 'a',
//   color: 'b'
// }

// {
//   ...sugus,
//   cantidad: 1
// }

// {
//   sabor: 'a',
//   color: 'b',
//   cantidad: 1,
// }
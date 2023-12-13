import { Component } from '@angular/core';
import { Plato, Platos } from 'src/app/types/plato.type';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  // tortilla = new Plato('Tortilla de patatas', 'Tortilla de patatas con cebolla', 4, 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg', 'abc')

  listaPlatos: Platos = [
    new Plato('Tortilla de patatas', 'Tortilla de patatas con cebolla', 4, 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg', 'abc'),
    new Plato('Ensalada Cesar', 'La famosa ensalada de Julio Cesar, con picatostes', 3, 'https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg', 'def'),
  ]

  constructor() {
    // this.listaPlatos.push(this.tortilla)
  }


}

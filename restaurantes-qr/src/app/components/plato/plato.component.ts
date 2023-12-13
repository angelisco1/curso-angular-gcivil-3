import { Component, Input } from '@angular/core';
import { Plato } from 'src/app/types/plato.type';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent {
  @Input() plato: Plato = new Plato('Tortilla de patatas', 'Tortilla de patatas con cebolla', 4, 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg', 'abc')
}

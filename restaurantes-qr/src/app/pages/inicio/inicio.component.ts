import { Component } from '@angular/core';
import { CartaService } from 'src/app/services/carta.service';
import { Restaurantes } from 'src/app/types/restaurante.type';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  restaurantes: Restaurantes = []

  constructor(
    private cartaService: CartaService,
  ) {

  }

  ngOnInit() {
    this.cartaService.getRestaurantes()
      .subscribe((restaurantes: Restaurantes) => {
        this.restaurantes = restaurantes
      })
  }

}

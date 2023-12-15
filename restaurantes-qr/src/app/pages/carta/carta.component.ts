import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { CartaService } from 'src/app/services/carta.service';
import { Plato, Platos } from 'src/app/types/plato.type';
import { Restaurante } from 'src/app/types/restaurante.type';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  // tortilla = new Plato('Tortilla de patatas', 'Tortilla de patatas con cebolla', 4, 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg', 'abc')

  listaPlatos: Platos = [
    // new Plato('Tortilla de patatas', 'Tortilla de patatas con cebolla', 4, 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg', 'abc'),
    // new Plato('Ensalada Cesar', 'La famosa ensalada de Julio Cesar, con picatostes', 3, 'https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg', 'def'),
  ]

  restaurante: Restaurante | null = null

  constructor(
    private route: ActivatedRoute,
    private cartaService: CartaService,
  ) {
    // this.listaPlatos.push(this.tortilla)
  }

  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const restauranteBdId = params.get('restauranteId')

        if (restauranteBdId) {
          return this.cartaService.getRestaurante(restauranteBdId)
        }

        return of(null)
      })
    )
      .subscribe((restaurante: Restaurante | null) => {
        console.log(restaurante)
        this.restaurante = restaurante
        // this.restaurante?.showDatos()
      })

    // this.route.paramMap
    //   .subscribe((params: ParamMap) => {
    //     const restauranteBdId = params.get('restauranteId')

    //     if (restauranteBdId) {
    //       this.cartaService.getRestaurante(restauranteBdId)
    //         .subscribe((restaurante: any) => {
    //           console.log(restaurante)
    //           this.restaurante = restaurante
    //         })
    //     }
    //   })
  }

}

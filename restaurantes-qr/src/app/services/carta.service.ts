import { Injectable } from '@angular/core';
import { Platos } from '../types/plato.type';
import { HttpClient } from '@angular/common/http';
import { Restaurante, Restaurantes } from '../types/restaurante.type';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  platos: Platos = []
  private url: string = `https://ejemplos-dc1c1.firebaseio.com/curso-angular-gc/angel/restaurantes`

  constructor(
    private http: HttpClient
  ) { }

  guardarCarta(restaurante: Restaurante): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(`${this.url}.json`, restaurante)
  }

  getRestaurante(restauranteId: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.url}/${restauranteId}.json`)
  }

  getRestaurantes(): Observable<Restaurantes> {
    return this.http.get<{ [key: string]: Restaurante }>(`${this.url}.json`)
      .pipe(
        map((restaurantesObj) => {
          const restaurantes: Restaurantes = []
          for (let restauranteId in restaurantesObj) {
            console.log({ restauranteId })
            const { restaurante: nombre, carta } = restaurantesObj[restauranteId]
            const restaurante = new Restaurante(nombre, carta)
            restaurante.id = restauranteId
            restaurantes.push(restaurante)
          }

          console.log(restaurantes)
          return restaurantes
        })
      )
  }


}

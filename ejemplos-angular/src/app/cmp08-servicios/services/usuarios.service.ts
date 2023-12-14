import { Injectable } from '@angular/core';
import { Observable, delay, first, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios = [
    { id: '123', nombre: 'Charles Falco' },
    { id: '456', nombre: 'Mike Kozinski' },
    { id: '789', nombre: 'Perico de los palotes' },
  ]

  constructor() { }

  getUsuarios(): Observable<Array<any>> {
    return of(this.usuarios)
      .pipe(
        first(),
        delay(1500)
      )
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css']
})
export class Cmp01DataBindingComponent {
  // string, number, boolean, any, Array<number>, number[], null
  nombre: string = 'Ángel'
  apellido: string = 'Villalba'

  urlLogoAngular: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGkcMkTBc-lpzANr23j0wSHRAYQ39Nt_hMqbolwzCrQ&s'
  nombreLogo: string = 'Angular'

  get nombreCompleto() {
    return this.nombre + ' ' + this.apellido
  }

  getNombre(): string {
    return this.nombre
  }

  saludar(event: any) {
    alert(`Hola ${this.nombreCompleto}`)
    console.log(event)
  }

  cambiarNombre(event: Event) {
    console.log(event)
    this.nombre = (event.target as HTMLInputElement).value
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent {
  producto = {
    nombre: 'one plus 12',
    precio: 900,
    descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quaerat adipisci soluta, dolore saepe maxime iste! Rem nostrum voluptatibus quisquam porro rerum obcaecati ad alias laudantium suscipit odit! Et, est.',
    fechaLanzamiento: new Date(2024, 1, 23),
  }

  wordsToRemove = ['Lorem', 'porro']
  currencyCode = 'EUR'

  fraseChuck: Promise<string> | null = null

  preguntaAChuck() {
    this.fraseChuck = fetch('https://api.chucknorris.io/jokes/random')
      .then((resp: Response) => {
        return resp.json()
      })
      .then((data) => {
        console.log({ data })
        return data.value
      })
  }

  async preguntaAChuck2() {
    const resp = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await resp.json()

    this.fraseChuck = await data.value
  }
}

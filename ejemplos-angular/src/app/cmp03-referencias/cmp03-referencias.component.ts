import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp03-referencias',
  templateUrl: './cmp03-referencias.component.html',
  styleUrls: ['./cmp03-referencias.component.css']
})
export class Cmp03ReferenciasComponent {

  play(video: HTMLVideoElement) {
    console.dir(video)
    video.play()
  }

  pause(video: HTMLVideoElement) {
    video.pause()
  }

  cambiarVolumen(video: HTMLVideoElement, event: Event) {
    const valor = (event.target as HTMLInputElement).value
    video.volume = Number(valor) / 100
  }
}

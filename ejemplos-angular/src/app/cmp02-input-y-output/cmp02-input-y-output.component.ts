import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp02-input-y-output',
  templateUrl: './cmp02-input-y-output.component.html',
  styleUrls: ['./cmp02-input-y-output.component.css']
})
export class Cmp02InputYOutputComponent {
  saborDinamico = 'sorpresa'
  colorDinamico = 'black'

  cambiarColor(event: Event) {
    this.colorDinamico = (event.target as HTMLInputElement).value
  }
}

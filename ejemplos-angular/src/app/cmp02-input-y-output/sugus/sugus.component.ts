import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent {
  @Input() sabor: string = 'limón'
  @Input() color: string = 'yellow'


  get styles() {
    return {
      backgroundColor: this.color
    }
  }
}

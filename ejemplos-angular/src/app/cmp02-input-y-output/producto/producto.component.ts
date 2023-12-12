import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sugus } from 'src/app/types/sugus.type';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() color: string = ''
  @Input() sabor: string = ''
  @Output() onAddToCart = new EventEmitter<Sugus>()

  addToCart() {
    this.onAddToCart.emit({ sabor: this.sabor, color: this.color })
  }

}

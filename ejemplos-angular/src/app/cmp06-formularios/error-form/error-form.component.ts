import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent {
  mensajes: Array<string> = []
  @Input() errores: any = null

  ngOnChanges(changes: any) {
    console.log(this.errores)
    console.log(changes)

    this.mensajes = []

    const cambios = changes.errores.currentValue
    Object.entries(cambios).forEach((entry: [string, any]) => {
      // const key = entry[0]
      // const value = entry[1]
      const [key, value] = entry
      switch (key) {
        case 'required':
          this.mensajes.push('Este campo es obligatorio')
          break
        case 'pattern':
          this.mensajes.push('Tienes que poner un email válido')
          break
        case 'minlength':
          this.mensajes.push(`Necesitas ${value.requiredLength} caracteres y solo has puesto ${value.actualLength}`)
          break
        case 'isUserValid':
          this.mensajes.push(`El usuario no es válido`)
          break

      }

    })
  }

}

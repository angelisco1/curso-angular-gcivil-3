import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartaService } from 'src/app/services/carta.service';
import { Plato, Platos } from 'src/app/types/plato.type';
import { Restaurante } from 'src/app/types/restaurante.type';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formRestaurante: FormGroup
  formPlato: FormGroup

  carta: Platos = []

  constructor(
    private cartaService: CartaService,
    private router: Router,
  ) {
    this.formRestaurante = new FormGroup({
      nombre: new FormControl('', Validators.required)
    })

    this.formPlato = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl(0, [Validators.required, Validators.min(0)]),
      foto: new FormControl('', Validators.required),
    })
  }

  guardarPlato() {
    // {
    //   nombre: '',
    //   descripcion: '',
    //   precio: '',
    //   foto: '',
    // }
    // const nums = [1, 2, 3, 4]
    // const [a, dos, tres, cuatro] = nums
    const { foto, nombre, descripcion, precio } = this.formPlato.value
    const id = Math.random().toString().slice(2)
    const plato = new Plato(nombre, descripcion, precio, foto, id)
    this.carta.push(plato)

    this.formPlato.reset()
  }

  guardar() {
    const restaurante = new Restaurante(this.formRestaurante.value.nombre, this.carta)

    // Llamar al servicio y hacer petición POST
    this.cartaService.guardarCarta(restaurante)
      .subscribe((resp: any) => {
        console.log(resp)
        const idBd = resp.name
        this.router.navigate(['/carta-restaurante', idBd])
      })
  }

}

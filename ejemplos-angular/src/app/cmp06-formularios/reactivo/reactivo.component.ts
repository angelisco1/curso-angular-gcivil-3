import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../validations/custom-validators';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent {
  form: FormGroup

  constructor() {
    const fn = Validators.minLength(8)
    this.form = new FormGroup({
      username: new FormControl('aaa', [Validators.required, /*CustomValidators.isUserValid,*/ CustomValidators.isUserValid2(['angel', 'ramon', 'jesus', 'jose carlos', 'pedro', 'fernando'])]),
      email: new FormControl('bbb', [Validators.required]),
      password: new FormControl('ccc', [Validators.required, fn]),
    })
  }

  get erroresUsername() {
    return this.form.get('username')?.errors
  }

  get erroresEmail() {
    return this.form.get('email')?.errors
  }

  get erroresPassword() {
    return this.form.get('password')?.errors
  }

  get mostrarErroresUsername() {
    return this.form.get('username')?.invalid && this.form.get('username')?.touched
  }

  get mostrarErroresEmail() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched
  }

  get mostrarErroresPassword() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched
  }

  registro() {
    console.log(this.form)
  }
}

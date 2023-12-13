import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

  static isUserValid(formControl: AbstractControl): ValidationErrors | null {
    const usuariosValidos = ['robb', 'sansa', 'arya', 'bran', 'rickon', 'tony']

    if (usuariosValidos.includes(formControl.value)) {
      return null
    }

    return {
      isUserValid: false
    }

  }


  static isUserValid2(usuariosValidos: Array<string>): ValidatorFn {

    return (formControl: AbstractControl) => {

      if (usuariosValidos.includes(formControl.value)) {
        return null
      }

      return {
        isUserValid: false
      }
    }

  }
}
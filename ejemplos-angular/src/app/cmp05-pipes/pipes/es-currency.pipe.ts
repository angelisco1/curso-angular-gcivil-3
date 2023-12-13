import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esCurrency'
})
export class EsCurrencyPipe implements PipeTransform {

  transform(value: string | null): string {
    if (!value) {
      return ''
    }

    const precio = value.slice(1).replace('.', ',')
    const simbolo = value[0]
    return precio + simbolo;
  }

}

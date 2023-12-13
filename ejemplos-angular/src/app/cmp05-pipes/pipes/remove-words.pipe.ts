import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeWords'
})
export class RemoveWordsPipe implements PipeTransform {

  transform(value: string, words: Array<string>): string {
    let resultado = value

    words.forEach((word) => {
      resultado = resultado.replaceAll(word, '*'.repeat(word.length))
    })

    return resultado;
  }

}

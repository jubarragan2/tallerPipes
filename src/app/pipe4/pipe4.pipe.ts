import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe4'
})
export class Pipe4Pipe implements PipeTransform {

  transform(value: string): string {
    let resultado = '';
    if (!value) {
      return "";
    }else{
      for (let i = 0; i < value.length; i++) {
        if(i % 2 == 0 ){
          resultado += value[i].toUpperCase();
        }else{
          resultado += value[i].toLowerCase();
        }
      }
    }
    return resultado;
  }
}

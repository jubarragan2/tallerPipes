import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2'
})
export class Pipe2Pipe implements PipeTransform {
  fecha: Date;
  transform(value: Date): String {

    if (!value) {
      return "";
    }else if (value.getHours== this.fecha.getHours) {
      return "conectado hace pocos minutos";
    }
    
  }

}

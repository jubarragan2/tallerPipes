import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return "";
    }else{
      return value.toUpperCase();
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'vuela' })
export class VuelaPipes implements PipeTransform {
  transform(valor: boolean): string {
    console.log(
      '🚀 ~ file: vuela.pipes.ts:5 ~ VuelaPipes ~ transform ~ valor',
      valor
    );
    return valor ? 'Vuela' : 'No Vuela';
  }
}

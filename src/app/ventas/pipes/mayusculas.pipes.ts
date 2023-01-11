import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mayusculas' })
export class MayusculasPipes implements PipeTransform {
  transform(valor: string, enMayus: boolean = true): string {
    console.log(
      '🚀 ~ file: mayusculas.pipes.ts:6 ~ MayusculasPipes ~ transform ~ enMayus',
      enMayus
    );

    console.log(valor);

    return enMayus ? valor.toUpperCase() : valor.toLocaleLowerCase();
  }
}

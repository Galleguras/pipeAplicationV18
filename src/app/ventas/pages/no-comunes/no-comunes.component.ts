import { Component } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = { masculino: 'invitarlo', femenino: 'invitarla' };

  //i18nPlural
  clientes = ['Jose', 'Carlos', 'Fernando', 'Luis'];
  clientesMapa = {
    '=0': 'no tenemos ninguno',
    '=1': ' un cliente esperando',
    '=2': ' 2 clientes esperando',
    other: ' # clientes esperando',
  };
  cambiarPersona() {
    console.log('first');
    this.nombre = 'Pepe';
    this.genero = 'masculino';
  }
  borrarPersona() {
    this.clientes.pop();
  }

  //KEYVALUEPIPE
  personas = { nombre: 'Fernando', edad: 35, direccion: 'Otawa, Canadá' };

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('tenemos datos'), 3000);
  });

  /*   constructor() {
    this.miObservable.subscribe(console.log);
  } */
}

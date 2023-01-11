import { Heroe, Color } from './../../interfaces/ventas.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent {
  enMayus: boolean = true;
  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: true, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'XXX', vuela: false, color: Color.rojo },
  ];
  cambiarCapitalizar() {
    console.log('cambiar');
    this.enMayus = !this.enMayus;
  }
}

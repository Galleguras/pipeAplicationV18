import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent {
  enMayus: boolean = true;
  cambiarCapitalizar() {
    console.log('cambiar');
    this.enMayus = !this.enMayus;
  }
}

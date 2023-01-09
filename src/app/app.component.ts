import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private primeNGConfig: PrimeNGConfig) {}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.primeNGConfig.ripple = true;
  }
  title = 'pipeAplicationV18';
  nombre: string = 'Fernando';
  valor: number = 12312;
  obj = { nombre: 'Pepe' };
  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.obj);
  }
}

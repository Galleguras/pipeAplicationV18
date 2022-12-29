import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pipeAplicationV18';
  nombre: string = 'Fernando';
  valor: number = 12312;
  obj = { nombre: 'Pepe' };
  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.obj);
  }
}

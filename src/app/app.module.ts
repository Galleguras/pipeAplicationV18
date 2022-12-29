import { AppRouterModule } from './app-router.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
//prime-ng
/* import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'; */
@NgModule({
  declarations: [
    AppComponent,
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule /* ButtonModule, CardModule */,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

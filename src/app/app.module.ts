import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRouterModule, VentasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

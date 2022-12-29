import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
//prime-ng
/* import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'; */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrimeNgModule /* ButtonModule, CardModule */],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

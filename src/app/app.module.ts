import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
//prime-ng
/* import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'; */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule /* ButtonModule, CardModule */],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

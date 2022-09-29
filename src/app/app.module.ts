import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import  localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//localização do brasil para quando usa algum tipo de localização usar os padroes brasileiros
registerLocaleData( localePt, 'pt');

@NgModule({
  declarations: [ AppComponent, NovaTransferenciaComponent, ExtratoComponent ],
  imports: [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  //imports: [ BrowserModule, FormsModule ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

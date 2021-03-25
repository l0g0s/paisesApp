import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './pipes/pipes.module';

// Cambiar el locale de la app
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'
import { PrimeNgModule } from './prime-ng/prime-ng.module';

registerLocaleData(localeEs)

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaisModule,
    SharedModule,
    PipesModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

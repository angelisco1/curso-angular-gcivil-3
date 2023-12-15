import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlatoComponent } from './components/plato/plato.component';
import { CartaComponent } from './pages/carta/carta.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { QrCodeModule } from 'ng-qrcode';
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './pages/inicio/inicio.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlatoComponent,
    CartaComponent,
    FormularioComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    QrCodeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: JSONToXMLInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

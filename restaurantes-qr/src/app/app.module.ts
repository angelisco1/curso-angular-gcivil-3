import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlatoComponent } from './components/plato/plato.component';
import { CartaComponent } from './pages/carta/carta.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlatoComponent,
    CartaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    QrCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

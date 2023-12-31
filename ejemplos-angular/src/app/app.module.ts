import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cmp02InputYOutputComponent } from './cmp02-input-y-output/cmp02-input-y-output.component';
import { SugusComponent } from './cmp02-input-y-output/sugus/sugus.component';
import { Cmp03ReferenciasComponent } from './cmp03-referencias/cmp03-referencias.component';
import { ProductoComponent } from './cmp02-input-y-output/producto/producto.component';
import { Cmp04DirectivasComponent } from './cmp04-directivas/cmp04-directivas.component';
import { Cmp05PipesComponent } from './cmp05-pipes/cmp05-pipes.component';
import { EsCurrencyPipe } from './cmp05-pipes/pipes/es-currency.pipe';
import { RemoveWordsPipe } from './cmp05-pipes/pipes/remove-words.pipe';
import { Cmp06FormulariosComponent } from './cmp06-formularios/cmp06-formularios.component';
import { PlantillaComponent } from './cmp06-formularios/plantilla/plantilla.component';
import { ReactivoComponent } from './cmp06-formularios/reactivo/reactivo.component';
import { ErrorFormComponent } from './cmp06-formularios/error-form/error-form.component';
import { Cmp07RoutingComponent } from './cmp07-routing/cmp07-routing.component';
import { InicioComponent } from './cmp07-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp07-routing/nuevo-usuario/nuevo-usuario.component';
import { AppRoutingModule } from './cmp07-routing/app.routes';
import { ErrorComponent } from './cmp07-routing/error/error.component';
import { InfoUsuarioComponent } from './cmp07-routing/info-usuario/info-usuario.component';
import { Cmp08ServiciosComponent } from './cmp08-servicios/cmp08-servicios.component';
import { ObservablesComponent } from './cmp08-servicios/observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp01DataBindingComponent,
    Cmp02InputYOutputComponent,
    SugusComponent,
    Cmp03ReferenciasComponent,
    ProductoComponent,
    Cmp04DirectivasComponent,
    Cmp05PipesComponent,
    EsCurrencyPipe,
    RemoveWordsPipe,
    Cmp06FormulariosComponent,
    PlantillaComponent,
    ReactivoComponent,
    ErrorFormComponent,
    Cmp07RoutingComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    ErrorComponent,
    InfoUsuarioComponent,
    Cmp08ServiciosComponent,
    ObservablesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

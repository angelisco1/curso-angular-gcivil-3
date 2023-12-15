import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormularioComponent } from "./pages/formulario/formulario.component";
import { CartaComponent } from "./pages/carta/carta.component";
import { InicioComponent } from "./pages/inicio/inicio.component";

const APP_ROUTES: Routes = [
  { path: '', component: InicioComponent },
  { path: 'crear-carta-restaurante', component: FormularioComponent },
  { path: 'carta-restaurante/:restauranteId', component: CartaComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
]

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { NuevoUsuarioComponent } from "./nuevo-usuario/nuevo-usuario.component";
import { NgModule } from "@angular/core";
import { ErrorComponent } from "./error/error.component";
import { InfoUsuarioComponent } from "./info-usuario/info-usuario.component";
import { isAuthenticatedGuard } from "./guards/is-authenticated.guard";

const USUARIOS_ROUTES: Routes = [
  { path: ':id/info', component: InfoUsuarioComponent, canActivate: [isAuthenticatedGuard] }
]

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: InicioComponent, children: USUARIOS_ROUTES },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },

  // { path: 'info-usuario/:id', component: InfoUsuarioComponent },

  { path: '**', component: ErrorComponent },
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
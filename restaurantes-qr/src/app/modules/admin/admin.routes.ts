import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(ADMIN_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
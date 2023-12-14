import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/cmp08-servicios/services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  usuarios: Array<any> = []

  constructor(
    private usuariosService: UsuariosService
  ) {

  }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe((usuarios: Array<any>) => {
      this.usuarios = usuarios
    })
  }
}

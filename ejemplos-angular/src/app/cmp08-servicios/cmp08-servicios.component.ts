import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-cmp08-servicios',
  templateUrl: './cmp08-servicios.component.html',
  styleUrls: ['./cmp08-servicios.component.css']
})
export class Cmp08ServiciosComponent {
  mostrarObservables: boolean = true

  constructor(
    private logger: LoggerService
  ) {

  }

  toggleObservables() {
    this.mostrarObservables = !this.mostrarObservables
  }

  mostrarMensaje() {
    this.logger.info('Sabías que...')
  }

  mostrarWarning() {
    this.logger.warning('Cuidado con lo que haces')
  }

}

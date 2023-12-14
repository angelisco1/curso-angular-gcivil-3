import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(mensaje: string) {
    console.info(`[+] ${mensaje}`)
  }

  warning(mensaje: string) {
    console.warn(`[!] ${new Date().toLocaleDateString()} ${mensaje}`)
  }
}

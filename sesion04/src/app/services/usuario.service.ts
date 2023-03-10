import { Injectable } from '@angular/core';
import { UsuarioModelo } from '../models/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario!: UsuarioModelo;

  constructor() {
    this.usuario = {nombre:"rafael",edad:16,curso:"REACT"}
  }

  getUsuario() : UsuarioModelo {
    return this.usuario;
  }

  setUsuario(usuario: UsuarioModelo) {
    this.usuario = usuario;
  }
}

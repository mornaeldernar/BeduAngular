import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { UsuarioModelo } from './models/usuario.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sesion04';

  public usuario! : UsuarioModelo;

  constructor(private usuarioService: UsuarioService){

  }

  ngOnInit() : void {
    this.usuario = this.usuarioService.getUsuario();
  }
}

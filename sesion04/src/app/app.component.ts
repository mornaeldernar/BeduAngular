import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { UsuarioModelo } from './models/usuario.modelo';
import { LocalStorageService } from './services/local-storage.service';
import { CoffeeService } from './services/api/coffee.service';
/*import { ActivityService } from './services/api/activity.service';
import { FormsModule } from '@angular/forms';
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sesion04';

  public usuario! : UsuarioModelo;
  public coffeeData: any;
  public activityData:any;
  constructor(private usuarioService: UsuarioService, private localStorageService: LocalStorageService, private coffeeService: CoffeeService/*, private activityService: ActivityService*/){

  }

  ngOnInit() : void {
    this.localStorageService.almacenar("usuario", this.usuarioService.getUsuario());
    this.usuario = this.localStorageService.consultar("usuario");
    this.usuario.curso = 'React';
    this.localStorageService.obtenerTodo();
    //this.consultarCoffee();

  }

  consultarCoffee():void{
    this.coffeeService.getCoffee().subscribe(
      (res :any) => {
        console.log(res);
        this.coffeeData = res;
      }
    )

  }
/*
  actividades() {
    this.activityService.getActivity().subscribe(
      (res:any) => {
        this.activityData = res;
      }
    )
  }*/
}

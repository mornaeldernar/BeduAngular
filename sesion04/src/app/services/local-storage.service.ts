import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private valor!: string;

  constructor() { }

  almacenar(key:string, value:any) {
    localStorage.setItem(key,JSON.stringify(value))
  }
  consultar(key:string){
    return JSON.parse(localStorage.getItem(key) || "");
  }
  borrar(key:string){
    localStorage.removeItem(key)
  }
  lipiarTodo(){
    localStorage.clear();
  }
  obtenerTodo() {
    let tama = localStorage.length;
    console.log(tama);
  }
}

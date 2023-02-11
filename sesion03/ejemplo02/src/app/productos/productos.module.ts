import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';



@NgModule({
  declarations: [
    ListaProductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaProductosComponent
  ]
})
export class ProductosModule { }

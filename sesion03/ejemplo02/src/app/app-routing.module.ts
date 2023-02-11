import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListaProductosComponent } from './productos/components/lista-productos/lista-productos.component';
import { InfoUsuarioComponent } from './usuarios/components/info-usuario/info-usuario.component';

const routes: Routes = [
  { path : "productos", component: ListaProductosComponent },
  { path : "usuarios/:id", component: InfoUsuarioComponent , canActivate: [AuthGuard]},
  { path : "", redirectTo: '/productos', pathMatch: 'full' },
  { path : "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"registro", component: RegistroComponent},
  {path:"login", component: LoginComponent},
  {path:"producto/:id", component: DetalleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

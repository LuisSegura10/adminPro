import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrarComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
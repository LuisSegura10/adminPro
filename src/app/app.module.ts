import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { NopagefoundComponent } from './page/nopagefound/nopagefound.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BreadcumbsComponent } from './shared/breadcumbs/breadcumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeadbarComponent } from './shared/headbar/headbar.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Grafica1Component } from './page/grafica1/grafica1.component';
import { AppRoutingModule } from './app-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcumbsComponent,
    SidebarComponent,
    HeadbarComponent,
    ProgressComponent,
    Grafica1Component,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

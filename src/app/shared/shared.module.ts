import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    HeadbarComponent,
    BreadcumbsComponent
  ],
  exports: [
    SidebarComponent,
    HeadbarComponent,
    BreadcumbsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

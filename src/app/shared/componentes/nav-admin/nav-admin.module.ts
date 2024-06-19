import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// El router
import { RouterModule } from '@angular/router';
import { NavAdminComponent } from './nav-admin.component';

@NgModule({
  declarations: [
    NavAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavAdminComponent
  ]
})
export class NavAdminModule { }

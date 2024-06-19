import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAdminComponent } from './inicio-admin.component';

const routes: Routes = [
  {
    path:'',
    component: InicioAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioAdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoAdminComponent } from './contacto-admin.component';

const routes: Routes = [
  {
    path:'',
    component: ContactoAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoAdminRoutingModule { }

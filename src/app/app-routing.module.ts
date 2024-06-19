import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'inicio',
    loadChildren:() => import('./articles/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path:'contacto',
    loadChildren:() => import('./articles/contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path:'dashboard',
    loadChildren:() => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'inicio-admin',
    loadChildren:() => import('./admin/inicio-admin/inicio-admin.module').then(m => m.InicioAdminModule)
  },
  {
    path:'contacto-admin',
    loadChildren:() => import('./admin/contacto-admin/contacto-admin.module').then(m => m.ContactoAdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

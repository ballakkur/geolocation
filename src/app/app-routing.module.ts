import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { GeoComponent } from './geo/geo.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'geo', component:GeoComponent},
  { path: 'admin', component:AdminComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: LoginComponent },
      { path: "*", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

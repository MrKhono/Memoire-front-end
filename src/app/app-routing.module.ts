import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';
import { SchoolComponent } from './components/school/school.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'login', component: LoginComponent},
  { path : 'suscribe', component : SuscribeComponent},
  { path : 'school',  component : SchoolComponent}

]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{

}

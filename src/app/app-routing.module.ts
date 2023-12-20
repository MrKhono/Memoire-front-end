import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'login', component: LoginComponent},
  { path : 'suscribe', component : SuscribeComponent}

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

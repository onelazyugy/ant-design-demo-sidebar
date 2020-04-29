import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { WorkComponent } from './pages/work/work.component';
import { EatComponent } from './pages/eat/eat.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'eat',
    component: EatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

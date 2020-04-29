import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { WorkComponent } from './pages/work/work.component';
import { EatComponent } from './pages/eat/eat.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { ChoresComponent } from './pages/chores/chores.component';

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
  },
  {
    path: 'sleep',
    component: SleepComponent
  },
  {
    path: 'chores',
    component: ChoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

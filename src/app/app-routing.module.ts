import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { WorkComponent } from './pages/work/work.component';
import { EatComponent } from './pages/eat/eat.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { ChoresComponent } from './pages/chores/chores.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { CheckoutComponent } from './pages/pizza/checkout/checkout.component';
import { CreateComponent } from './pages/pizza/create/create.component';
import { CompleteComponent } from './pages/pizza/checkout/complete/complete.component';
import { StartComponent } from './pages/pizza/checkout/start/start.component';

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
  },
  {
    path: 'pizza',
    component: PizzaComponent,
    children: [
      {path: '', component: CreateComponent}, // if user navigate to /pizza, it will render CreateComponent
      {
        path: 'checkout', 
        component: CheckoutComponent,
        children: [
          {path: '', component: StartComponent},
          {path: 'complete', component: CompleteComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

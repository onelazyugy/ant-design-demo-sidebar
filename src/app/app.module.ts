import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginModule } from './pages/login/login.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { RxjsModule } from './pages/rxjs/rxjs.module';
import { WorkModule } from './pages/work/work.module';
import { EatModule } from './pages/eat/eat.module';
import { SleepModule } from './pages/sleep/sleep.module';
import { ChoresModule } from './pages/chores/chores.module';

import { StoreModule } from '@ngrx/store';
import { welcomeTaskReducer } from './pages/welcome/store/welcome.reducer';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //wire up the store with all of the app reducers
    StoreModule.forRoot({welcomeTask: welcomeTaskReducer}),

    LoginModule,
    WelcomeModule,
    RxjsModule,
    WorkModule,
    EatModule,
    SleepModule,
    ChoresModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

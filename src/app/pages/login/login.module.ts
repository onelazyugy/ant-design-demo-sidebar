import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignCommonModule } from '../../ant-design-common.module';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AntDesignCommonModule,
    NzFormModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }

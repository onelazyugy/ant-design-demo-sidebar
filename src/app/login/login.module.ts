import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { AntDesignCommonModule } from '../ant-design-common.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    AntDesignCommonModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }

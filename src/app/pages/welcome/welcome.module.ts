import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    FormsModule,
    AntDesignCommonModule,
    ShareModule
  ],
  providers: [],
  bootstrap: []
})
export class WelcomeModule { }
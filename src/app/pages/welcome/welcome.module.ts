import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';
import { ShareModule } from 'src/app/share/share.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    FormsModule,
    AntDesignCommonModule,
    ShareModule,
    CommonModule //why need to import it here since ShareModule is import here
  ],
  providers: [],
  bootstrap: []
})
export class WelcomeModule { }
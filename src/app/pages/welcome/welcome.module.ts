import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    NzButtonModule,
    NzInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class WelcomeModule { }
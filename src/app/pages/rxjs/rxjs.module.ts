import { NgModule } from '@angular/core';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';
import { ShareModule } from 'src/app/share/share.module';
import { RxjsComponent } from './rxjs.component';

@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    ShareModule,
    AntDesignCommonModule
  ]
})
export class RxjsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';



@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    AntDesignCommonModule
  ]
})
export class WorkModule { }

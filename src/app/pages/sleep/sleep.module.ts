import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SleepComponent } from './sleep.component';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';

@NgModule({
  declarations: [SleepComponent],
  imports: [
    CommonModule,
    AntDesignCommonModule,
  ]
})
export class SleepModule { }

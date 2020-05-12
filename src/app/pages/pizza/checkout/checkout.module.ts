import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';
import { ShareModule } from 'src/app/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompleteModule } from './complete/complete.module';
import { StartModule } from './start/start.module';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    AntDesignCommonModule,
    ShareModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompleteModule,
    StartModule
  ]
})
export class CheckoutModule { }

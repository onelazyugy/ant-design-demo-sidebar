import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';
import { ShareModule } from 'src/app/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    AntDesignCommonModule,
    ShareModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }

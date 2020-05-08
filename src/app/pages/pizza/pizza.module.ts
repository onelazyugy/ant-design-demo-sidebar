import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza.component';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';
import { ShareModule } from 'src/app/share/share.module';
import { ToppingModule } from './topping/topping.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PizzaComponent],
  imports: [
    AntDesignCommonModule,
    ShareModule,
    CommonModule,
    FormsModule,
    ToppingModule
  ]
})
export class PizzaModule { }

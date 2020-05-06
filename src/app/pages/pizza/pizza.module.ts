import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza.component';
import { AntDesignCommonModule } from 'src/app/ant-design-common.module';
import { ShareModule } from 'src/app/share/share.module';
import { ToppingModule } from './topping/topping.module';



@NgModule({
  declarations: [PizzaComponent],
  imports: [
    AntDesignCommonModule,
    ShareModule,
    CommonModule,
    ToppingModule
  ]
})
export class PizzaModule { }

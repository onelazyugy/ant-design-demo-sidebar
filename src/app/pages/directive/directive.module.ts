import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [DirectiveComponent],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class DirectiveModule { }

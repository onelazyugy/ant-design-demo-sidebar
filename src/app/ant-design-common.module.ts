import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzStepsModule } from 'ng-zorro-antd/steps';


@NgModule({
    declarations: [],
    exports: [
        NzButtonModule,
        NzInputModule,
        NzStepsModule
    ]
})
export class AntDesignCommonModule {}
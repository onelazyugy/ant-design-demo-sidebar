import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
    declarations: [],
    exports: [
        NzButtonModule,
        NzInputModule,
        NzStepsModule,
        NzIconModule,
        NzGridModule,
        NzDividerModule
    ]
})
export class AntDesignCommonModule {}
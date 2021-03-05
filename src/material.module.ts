import { NgModule } from '@angular/core'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule
    ],
    exports: [
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})

export class MaterialModule {}
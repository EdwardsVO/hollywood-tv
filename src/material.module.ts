import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
// import { MatCarouselModule } from '@ngbmodule/material-carousel';

@NgModule({
    imports: [
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        // MatCarouselModule.forRoot(),
    ],
    exports: [
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
    ]
})

export class MaterialModule {}
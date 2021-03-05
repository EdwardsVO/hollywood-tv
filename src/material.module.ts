import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
<<<<<<< src/material.module.ts

=======
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
>>>>>>> src/material.module.ts

@NgModule({
    imports: [
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
<<<<<<< src/material.module.ts


=======
        MatInputModule,
        MatCardModule
        MatCarouselModule.forRoot(),
>>>>>>> src/material.module.ts
    ],
    exports: [
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ]
})

export class MaterialModule {}
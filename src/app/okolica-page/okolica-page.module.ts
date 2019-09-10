import { NgModule } from '@angular/core';
import { OkolicaPageComponent } from './okolica-page.component';
import { OkolicaMiejsceComponent } from './okolica-miejsce/okolica-miejsce.component';


@NgModule({
    declarations: [
        OkolicaMiejsceComponent,
        OkolicaPageComponent
    ],
    exports: [
        OkolicaMiejsceComponent,
        OkolicaPageComponent
    ]
})

export class OkolicaPageModule {}
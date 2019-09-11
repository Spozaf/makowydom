import { NgModule } from '@angular/core';
import { OkolicaPageComponent } from './okolica-page.component';
import { OkolicaMiejsceComponent } from './okolica-miejsce/okolica-miejsce.component';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: OkolicaPageComponent }
  ];


@NgModule({
    declarations: [
        OkolicaMiejsceComponent,
        OkolicaPageComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        OkolicaMiejsceComponent,
        OkolicaPageComponent,
        RouterModule
    ]
})

export class OkolicaPageModule {}
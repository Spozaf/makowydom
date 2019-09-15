import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartamentPageComponent } from './apartament-page.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ApartamentPageComponent }
  ];


@NgModule({
    declarations: [
        ApartamentPageComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ApartamentPageComponent,
        RouterModule
    ]
})

export class ApartamentPageModule {}
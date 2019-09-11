import { NgModule } from '@angular/core';

import { AtrakcjePageComponent } from './atrakcje-page.component';
import { AtrakcjeGalleryComponent } from './atrakcje-gallery/atrakcje-gallery.component';
import { AtrakcjeGalleryElementComponent } from './atrakcje-gallery/atrakcje-gallery-element/atrakcje-gallery-element.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: AtrakcjePageComponent }
  ];

@NgModule({
    declarations: [
        AtrakcjePageComponent,
        AtrakcjeGalleryComponent,
        AtrakcjeGalleryElementComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        AtrakcjePageComponent,
        AtrakcjeGalleryComponent,
        AtrakcjeGalleryElementComponent,
        RouterModule
    ]
})

export class AtrakcjePageModule {}
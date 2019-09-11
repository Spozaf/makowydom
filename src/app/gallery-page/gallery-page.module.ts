import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryPageComponent } from './gallery-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: GalleryPageComponent }
  ];

@NgModule({
    declarations: [
        GalleryPageComponent
    ],
    imports: [
        NgxGalleryModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        GalleryPageComponent,
        RouterModule
    ]
})

export class GalleryPageModule {}
import { NgModule } from '@angular/core';
import { CennikPageComponent } from './cennik-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: CennikPageComponent }
  ];


@NgModule({
    declarations: [
        CennikPageComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        CennikPageComponent,
        RouterModule
    ]
})

export class CennikPageModule {}
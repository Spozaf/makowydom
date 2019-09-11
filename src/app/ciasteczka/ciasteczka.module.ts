import { NgModule } from '@angular/core';
import { CiasteczkaComponent } from './ciasteczka.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: CiasteczkaComponent }
  ];

@NgModule({
    declarations: [
        CiasteczkaComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        CiasteczkaComponent,
        RouterModule
    ]
})

export class CiasteczkaModule {}
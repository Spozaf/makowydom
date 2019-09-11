import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from './header/header.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { SitePartsComponent } from './site-parts/site-parts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomePageComponent }
  ];

@NgModule({
    declarations: [
        SitePartsComponent,
        MainInfoComponent,
        HeaderComponent,
        HomePageComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        SitePartsComponent,
        MainInfoComponent,
        HeaderComponent,
        HomePageComponent,
        RouterModule
    ]
})

export class HomePageModule {}
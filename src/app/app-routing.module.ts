import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ApartamentPageComponent } from './apartament-page/apartament-page.component';
import { OkolicaPageComponent } from './okolica-page/okolica-page.component';
import { AtrakcjePageComponent } from './atrakcje-page/atrakcje-page.component';
import { CennikPageComponent } from './cennik-page/cennik-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'apartament', component: ApartamentPageComponent },
  { path: 'okolica', component: OkolicaPageComponent },
  { path: 'atrakcje', component: AtrakcjePageComponent },
  { path: 'cennik', component: CennikPageComponent },
  { path: 'galeria', component: GalleryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

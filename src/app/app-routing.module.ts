import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'apartament', loadChildren: './apartament-page/apartament-page.module#ApartamentPageModule' },
  { path: 'atrakcje', loadChildren: './atrakcje-page/atrakcje-page.module#AtrakcjePageModule'},
  { path: 'okolica', loadChildren: './okolica-page/okolica-page.module#OkolicaPageModule' },
  { path: 'cennik', loadChildren: './cennik-page/cennik-page.module#CennikPageModule' },
  { path: 'galeria', loadChildren: './gallery-page/gallery-page.module#GalleryPageModule' },
  { path: 'cookies', loadChildren: './ciasteczka/ciasteczka.module#CiasteczkaModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ApartamentPageComponent } from './apartament-page/apartament-page.component';
import { OkolicaPageComponent } from './okolica-page/okolica-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'apartament', component: ApartamentPageComponent },
  { path: 'okolica', component: OkolicaPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

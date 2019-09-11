import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WINDOW_PROVIDERS } from './window.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

import { SharedComponentsModule } from './shared-components/shared-components.module';

// import { OkolicaPageModule } from './okolica-page/okolica-page.module';
// import { AtrakcjePageModule } from './atrakcje-page/atrakcje-page.module';
// import { ApartamentPageModule } from './apartament-page/apartament-page.module';
// import { CiasteczkaModule } from './ciasteczka/ciasteczka.module';
// import { CennikPageModule } from './cennik-page/cennik-page.module';
import { HomePageModule } from './home-page/home-page-module';
// import { GalleryPageModule } from './gallery-page/gallery-page.module';

const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    "domain": "localhost"
  },
  "position": "bottom",
  "theme": "edgeless",
  "palette": {
    "popup": {
      "background": "#fcfdf9",
      "text": "#280f0f",
      "link": "#280f0f"
    },
    "button": {
      "background": "#280f0f",
      "text": "#fcfdf9",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "Ta strona używa plików cookie.",
    "dismiss": "Lubię ciastka!",
    "deny": "Nie lubisz ciastkek?!",
    "link": "Dowiedz się więcej",
    "href": "/cookies",
    "policy": "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    AppRoutingModule,
    //OkolicaPageModule,
    SharedComponentsModule,
    //AtrakcjePageModule,
    //ApartamentPageModule,
    //CiasteczkaModule,
    //CennikPageModule,
    HomePageModule,
    //GalleryPageModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }

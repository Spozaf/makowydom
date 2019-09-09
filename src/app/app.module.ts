import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WINDOW_PROVIDERS } from './window.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialProofComponent } from './home-page/social-proof/social-proof.component';
import { SocialCardComponent } from './home-page/social-proof/social-card/social-card.component';
import { MainInfoComponent } from './home-page/main-info/main-info.component';
import { ButtonComponent } from './shared-components/button/button.component';
import { CallToActionPhoneComponent } from './shared-components/call-to-action-phone/call-to-action-phone.component';
import { SitePartsComponent } from './home-page/site-parts/site-parts.component';
import { FooterComponent } from './footer/footer.component';
import { ApartamentPageComponent } from './apartament-page/apartament-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RoomCardComponent } from './apartament-page/room-card/room-card.component';
import { CallToActionMailComponent } from './shared-components/call-to-action-mail/call-to-action-mail.component';
import { ApartamentGalleryComponent } from './apartament-page/apartament-gallery/apartament-gallery.component';
import { OkolicaPageComponent } from './okolica-page/okolica-page.component';
import { AtrakcjePageComponent } from './atrakcje-page/atrakcje-page.component';
import { AtrakcjeGalleryComponent } from './atrakcje-page/atrakcje-gallery/atrakcje-gallery.component';
import { AtrakcjeGalleryElementComponent } from './atrakcje-page/atrakcje-gallery/atrakcje-gallery-element/atrakcje-gallery-element.component';
import { OkolicaMiejsceComponent } from './okolica-page/okolica-miejsce/okolica-miejsce.component';
import { CennikPageComponent } from './cennik-page/cennik-page.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { CiasteczkaComponent } from './ciasteczka/ciasteczka.component';

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
    HomePageComponent,
    HeaderComponent,
    NavbarComponent,
    SocialProofComponent,
    SocialCardComponent,
    MainInfoComponent,
    ButtonComponent,
    CallToActionPhoneComponent,
    SitePartsComponent,
    FooterComponent,
    ApartamentPageComponent,
    RoomCardComponent,
    CallToActionMailComponent,
    ApartamentGalleryComponent,
    OkolicaPageComponent,
    AtrakcjePageComponent,
    AtrakcjeGalleryComponent,
    AtrakcjeGalleryElementComponent,
    OkolicaMiejsceComponent,
    CennikPageComponent,
    GalleryPageComponent,
    CiasteczkaComponent
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgxGalleryModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    SitePartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }

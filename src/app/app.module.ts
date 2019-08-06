import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialProofComponent } from './home-page/social-proof/social-proof.component';
import { SocialCardComponent } from './home-page/social-proof/social-card/social-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NavbarComponent,
    SocialProofComponent,
    SocialCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

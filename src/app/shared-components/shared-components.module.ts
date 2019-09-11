import { SocialProofComponent } from './social-proof/social-proof.component';
import { SocialCardComponent } from './social-proof/social-card/social-card.component';
import { CallToActionMailComponent } from './call-to-action-mail/call-to-action-mail.component';
import { ButtonComponent } from './button/button.component';
import { CallToActionPhoneComponent } from './call-to-action-phone/call-to-action-phone.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    declarations: [
        CallToActionPhoneComponent,
        ButtonComponent,
        CallToActionMailComponent,
        SocialCardComponent,
        SocialProofComponent
    ],
    imports: [
        CommonModule,
        SlickCarouselModule
    ],
    exports: [
        CallToActionPhoneComponent,
        ButtonComponent,
        CallToActionMailComponent,
        SocialCardComponent,
        SocialProofComponent
    ]
})

export class SharedComponentsModule {}
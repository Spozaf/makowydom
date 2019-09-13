import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ImagesService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'makowydom';


  constructor(
    private router: Router,
    private ccService: NgcCookieConsentService,
    private imgService: ImagesService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        this.imgService.preload();

    }

    ngOnDestroy() {
    }

}

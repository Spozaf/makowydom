import { Component, OnInit, OnDestroy, HostListener, Inject } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { NgcCookieConsentService, WindowService } from "ngx-cookieconsent";
import { ImagesService } from "./services/images.service";

import { WINDOW } from "./../app/services/window.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [ImagesService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "makowydom";
  isLand: boolean;

  constructor(
    private router: Router,
    private ccService: NgcCookieConsentService,
    private imgService: ImagesService,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.imgService.preload();
    this.changeLand()


    this.window.addEventListener(
      "orientationchange",
      this.changeLand.bind(this),
      false
    )
  }

  
  changeLand() {
    if (this.window.matchMedia("(orientation: portrait)").matches) {
      this.isLand = false; 
    }
    else{
      this.isLand = true;
    }
  }

  ngOnDestroy() {
  }
}

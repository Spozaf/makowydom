import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { NgcCookieConsentService, WindowService } from "ngx-cookieconsent";
import { ImagesService } from "./services/images.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [ImagesService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "makowydom";

  constructor(
    private router: Router,
    private ccService: NgcCookieConsentService,
    private imgService: ImagesService,
    private windowService: WindowService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.imgService.preload();
    console.log(window.orientation);
    window.addEventListener(
      "orientationchange",
      function() {
        // Announce the new orientation number
        console.log(screen.orientation);
      },
      false
    );
    if (window.matchMedia("(orientation: portrait)").matches) {
      // you're in PORTRAIT mode
      console.log("portrait");
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      // you're in LANDSCAPE mode
      console.log("landscape");
    }
    //console.log(window.orientation.toString);
  }

  ngOnDestroy() {}
}

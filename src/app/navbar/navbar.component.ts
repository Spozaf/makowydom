import { Component, OnInit, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './../window.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isHomePage: boolean = false;
  navbarTransparent = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private router: Router
  ) {
      this.router.events.subscribe((event) => {
        if(event['url'] && event['url'] == '/') {
          this.isHomePage = true;
          this.navbarTransparent = true;
        } else if (event['url'] && event['url'] != '/') {
          this.isHomePage = false;
          this.navbarTransparent = false;
        }
      });
   }

  ngOnInit() {
    
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 100 && this.isHomePage) {
      this.navbarTransparent = true;
    } else {
      this.navbarTransparent = false;
    }

  }

  onPageClick(hompage: boolean) {
    console.log('HomePageFun ' + this.isHomePage);
    if(hompage){
      this.isHomePage = true;
      this.navbarTransparent = true;
    }
    else{
      this.isHomePage = false;
      this.navbarTransparent = false;
    }
  }
}

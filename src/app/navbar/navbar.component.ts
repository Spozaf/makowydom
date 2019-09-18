import { Component, OnInit, HostListener, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsiveSizeService } from '../services/responsive-size.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isHomePage: boolean = false;
  navbarTransparent = false;
  screen: number;
  sideNavbar: boolean;
  sideNavbarOpen: boolean = false;
  sideNavbarClass: string = 'sidenav';

  constructor(
    //@Inject(DOCUMENT) private document: Document,
    //@Inject(WINDOW) private window,
    private router: Router,
    private respService: ResponsiveSizeService
  ) { //sprawdzanie czy użtykownik jest na homepage
      //sprawdzanie czy był router event
      this.router.events.subscribe((event) => {
        //sprawdzamy czy jest to url event i czy url jest takie samo jak homepage
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
    this.screen = this.respService.getScreenSize();
    if(this.screen > 2){
      this.sideNavbar = true;
    }
    else {
      this.sideNavbar = false;
    }
  }

  // Wykrywanie ile został scrollowany ekran
  @HostListener("window:scroll", [])
  //sprawdzanie czy użytkownik zaczął scrollować
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 100 && this.isHomePage) {
      this.navbarTransparent = true;
    } else {
      this.navbarTransparent = false;
    }

  }

  // jeśli kliknięty został któryś link
  onPageClick(hompage: boolean) {
    if(hompage){
      this.isHomePage = true;
      this.navbarTransparent = true;
    }
    else{
      this.isHomePage = false;
      this.navbarTransparent = false;
    }
  }

  onMenuClick(){
    if(this.sideNavbarOpen){
      this.sideNavbarClass = 'sidenav'
      this.sideNavbarOpen = !this.sideNavbarOpen;
    } else {
      this.sideNavbarClass = 'sidenav-open'
      this.sideNavbarOpen = !this.sideNavbarOpen;
    }
  }

  //kliknięcie wewnątrz menu
  clickedInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();  // <- that will stop propagation on lower layers
  }

  //kliknięcie na zewnątrz menu
  @HostListener('document:click', ['$event']) clickedOutside($event){
    // here you can hide your menu
    if(this.sideNavbarOpen){
      this.sideNavbarClass = 'sidenav'
      this.sideNavbarOpen = !this.sideNavbarOpen;
    }
  }
}

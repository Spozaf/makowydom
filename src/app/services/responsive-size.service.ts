import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveSizeService {

  private breakpoint: number;

  constructor() {
    if (window.innerWidth > 1800){
      this.breakpoint = 0; // big
    }
    else if (window.innerWidth > 1200 && window.innerWidth < 1800){
      this.breakpoint = 1; //computer
    }
    else if (window.innerWidth > 950 && window.innerWidth < 1200 ){
      this.breakpoint = 2; //tablet-landscape
    }
    else if (window.innerWidth > 768 && window.innerWidth < 950) {
      this.breakpoint = 3; // tablet-portrait
    } 
    else {
      this.breakpoint = 4 // mobile;
    }
  }

  getScreenSize(): number {
    return this.breakpoint;
  }
}

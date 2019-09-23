import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";
import { ResponsiveSizeService } from "../services/responsive-size.service";

@Component({
  selector: "app-gallery-page",
  templateUrl: "./gallery-page.component.html",
  styleUrls: ["./gallery-page.component.scss"]
})
export class GalleryPageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  screenSize: number;

  constructor(private respService: ResponsiveSizeService) {}

  ngOnInit() {
    this.screenSize = this.respService.getScreenSize();
    //console.log(this.screenSize);
    if (this.screenSize <= 3) {
      this.galleryOptions = [
        {
          width: "100%",
          height: "135vh",
          thumbnailsColumns: 2,
          thumbnailsRows: 1,
          thumbnailsPercent: 40,
          imagePercent: 60,
          thumbnailMargin: 1,
          thumbnailsMargin: 1,
          thumbnailsOrder: 1,
          imageAnimation: NgxGalleryAnimation.Slide,
          arrowPrevIcon: "fa fa-angle-double-left",
          arrowNextIcon: 'fa fa-angle-double-right'
        },
        // max-width 800
        {
          breakpoint: 800,
          width: "100%",
          height: "600px",
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];
    } else {
      this.galleryOptions = [
        {
          width: "100%",
          height: "135vh",
          thumbnailsColumns: 3,
          thumbnailsRows: 2,
          thumbnailsPercent: 40,
          imagePercent: 60,
          thumbnailMargin: 2,
          thumbnailsMargin: 2,
          thumbnailsOrder: 2,
          imageAnimation: NgxGalleryAnimation.Slide,
          arrowPrevIcon: "fa fa-angle-double-left",
          arrowNextIcon: 'fa fa-angle-double-right'
        },
        // max-width 800
        {
          breakpoint: 800,
          width: "100%",
          height: "600px",
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];
    }

    this.galleryImages = [
      {
        small: "assets/images/galeria/3.JPG",
        medium: "assets/images/galeria/3.JPG",
        big: "assets/images/galeria/3.JPG"
      },
      {
        small: "assets/images/galeria/4.JPG",
        medium: "assets/images/galeria/4.JPG",
        big: "assets/images/galeria/4.JPG"
      },
      {
        small: "assets/images/galeria/5.JPG",
        medium: "assets/images/galeria/5.JPG",
        big: "assets/images/galeria/5.JPG"
      },
      {
        small: "assets/images/galeria/6.JPG",
        medium: "assets/images/galeria/6.JPG",
        big: "assets/images/galeria/6.JPG"
      },
      {
        small: "assets/images/galeria/7.JPG",
        medium: "assets/images/galeria/7.JPG",
        big: "assets/images/galeria/7.JPG"
      },
      {
        small: "assets/images/galeria/8.JPG",
        medium: "assets/images/galeria/8.JPG",
        big: "assets/images/galeria/8.JPG"
      },
      {
        small: "assets/images/galeria/9.JPG",
        medium: "assets/images/galeria/9.JPG",
        big: "assets/images/galeria/9.JPG"
      },
      {
        small: "assets/images/galeria/10.JPG",
        medium: "assets/images/galeria/10.JPG",
        big: "assets/images/galeria/10.JPG"
      },
      {
        small: "assets/images/galeria/11.JPG",
        medium: "assets/images/galeria/11.JPG",
        big: "assets/images/galeria/11.JPG"
      },
      {
        small: "assets/images/galeria/12.JPG",
        medium: "assets/images/galeria/12.JPG",
        big: "assets/images/galeria/12.JPG"
      },
      {
        small: "assets/images/galeria/13.JPG",
        medium: "assets/images/galeria/13.JPG",
        big: "assets/images/galeria/13.JPG"
      },
      {
        small: "assets/images/galeria/14.JPG",
        medium: "assets/images/galeria/14.JPG",
        big: "assets/images/galeria/14.JPG"
      },
      {
        small: "assets/images/galeria/15.JPG",
        medium: "assets/images/galeria/15.JPG",
        big: "assets/images/galeria/15.JPG"
      },
      {
        small: "assets/images/galeria/16.JPG",
        medium: "assets/images/galeria/16.JPG",
        big: "assets/images/galeria/16.JPG"
      },
      {
        small: "assets/images/galeria/17.JPG",
        medium: "assets/images/galeria/17.JPG",
        big: "assets/images/galeria/17.JPG"
      },
      {
        small: "assets/images/galeria/18.JPG",
        medium: "assets/images/galeria/18.JPG",
        big: "assets/images/galeria/18.JPG"
      },
      {
        small: "assets/images/galeria/19.JPG",
        medium: "assets/images/galeria/19.JPG",
        big: "assets/images/galeria/19.JPG"
      },
      {
        small: "assets/images/galeria/20.JPG",
        medium: "assets/images/galeria/20.JPG",
        big: "assets/images/galeria/20.JPG"
      },
      {
        small: "assets/images/galeria/1.jpg",
        medium: "assets/images/galeria/1.jpg",
        big: "assets/images/galeria/1.jpg"
      },
      {
        small: "assets/images/galeria/21.jpg",
        medium: "assets/images/galeria/21.jpg",
        big: "assets/images/galeria/21.jpg"
      },
      {
        small: "assets/images/galeria/22.JPG",
        medium: "assets/images/galeria/22.JPG",
        big: "assets/images/galeria/22.JPG"
      },
      {
        small: "assets/images/galeria/23.JPG",
        medium: "assets/images/galeria/23.JPG",
        big: "assets/images/galeria/23.JPG"
      },
      {
        small: "assets/images/galeria/24.JPG",
        medium: "assets/images/galeria/24.JPG",
        big: "assets/images/galeria/24.JPG"
      },
      {
        small: "assets/images/galeria/25.JPG",
        medium: "assets/images/galeria/25.JPG",
        big: "assets/images/galeria/25.JPG"
      },
      {
        small: "assets/images/galeria/26.JPG",
        medium: "assets/images/galeria/26.JPG",
        big: "assets/images/galeria/26.JPG"
      },
      {
        small: "assets/images/galeria/27.JPG",
        medium: "assets/images/galeria/27.JPG",
        big: "assets/images/galeria/27.JPG"
      },
      {
        small: "assets/images/galeria/28.JPG",
        medium: "assets/images/galeria/28.JPG",
        big: "assets/images/galeria/28.JPG"
      },
      {
        small: "assets/images/galeria/29.JPG",
        medium: "assets/images/galeria/29.JPG",
        big: "assets/images/galeria/29.JPG"
      },
      {
        small: "assets/images/galeria/30.JPG",
        medium: "assets/images/galeria/30.JPG",
        big: "assets/images/galeria/30.JPG"
      },
      {
        small: "assets/images/galeria/31.JPG",
        medium: "assets/images/galeria/31.JPG",
        big: "assets/images/galeria/31.JPG"
      },
      {
        small: "assets/images/galeria/32.JPG",
        medium: "assets/images/galeria/32.JPG",
        big: "assets/images/galeria/32.JPG"
      },
      {
        small: "assets/images/galeria/33.JPG",
        medium: "assets/images/galeria/33.JPG",
        big: "assets/images/galeria/33.JPG"
      },
      {
        small: "assets/images/galeria/34.JPG",
        medium: "assets/images/galeria/34.JPG",
        big: "assets/images/galeria/34.JPG"
      },
      {
        small: "assets/images/galeria/35.JPG",
        medium: "assets/images/galeria/35.JPG",
        big: "assets/images/galeria/35.JPG"
      },
      {
        small: "assets/images/galeria/2.jpg",
        medium: "assets/images/galeria/2.jpg",
        big: "assets/images/galeria/2.jpg"
      },
      {
        small: "assets/images/galeria/3.JPG",
        medium: "assets/images/galeria/3.JPG",
        big: "assets/images/galeria/3.JPG"
      }
    ];
  }
}

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
    if (this.screenSize == 4) {
      this.galleryOptions = [
        {
          width: "100%",
          height: "135vh",
          thumbnailsColumns: 3,
          thumbnailsRows: 1,
          thumbnailsPercent: 40,
          imagePercent: 60,
          thumbnailMargin: 2,
          thumbnailsMargin: 2,
          thumbnailsOrder: 2,
          imageAnimation: NgxGalleryAnimation.Slide
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
          imageAnimation: NgxGalleryAnimation.Slide
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
        small: "assets/images/galeria/3.jpg",
        medium: "assets/images/galeria/3.jpg",
        big: "assets/images/galeria/3.jpg"
      },
      {
        small: "assets/images/galeria/4.jpg",
        medium: "assets/images/galeria/4.jpg",
        big: "assets/images/galeria/4.jpg"
      },
      {
        small: "assets/images/galeria/5.jpg",
        medium: "assets/images/galeria/5.jpg",
        big: "assets/images/galeria/5.jpg"
      },
      {
        small: "assets/images/galeria/6.jpg",
        medium: "assets/images/galeria/6.jpg",
        big: "assets/images/galeria/6.jpg"
      },
      {
        small: "assets/images/galeria/7.jpg",
        medium: "assets/images/galeria/7.jpg",
        big: "assets/images/galeria/7.jpg"
      },
      {
        small: "assets/images/galeria/8.jpg",
        medium: "assets/images/galeria/8.jpg",
        big: "assets/images/galeria/8.jpg"
      },
      {
        small: "assets/images/galeria/9.jpg",
        medium: "assets/images/galeria/9.jpg",
        big: "assets/images/galeria/9.jpg"
      },
      {
        small: "assets/images/galeria/10.jpg",
        medium: "assets/images/galeria/10.jpg",
        big: "assets/images/galeria/10.jpg"
      },
      {
        small: "assets/images/galeria/11.jpg",
        medium: "assets/images/galeria/11.jpg",
        big: "assets/images/galeria/11.jpg"
      },
      {
        small: "assets/images/galeria/12.jpg",
        medium: "assets/images/galeria/12.jpg",
        big: "assets/images/galeria/12.jpg"
      },
      {
        small: "assets/images/galeria/13.jpg",
        medium: "assets/images/galeria/13.jpg",
        big: "assets/images/galeria/13.jpg"
      },
      {
        small: "assets/images/galeria/14.jpg",
        medium: "assets/images/galeria/14.jpg",
        big: "assets/images/galeria/14.jpg"
      },
      {
        small: "assets/images/galeria/15.jpg",
        medium: "assets/images/galeria/15.jpg",
        big: "assets/images/galeria/15.jpg"
      },
      {
        small: "assets/images/galeria/16.jpg",
        medium: "assets/images/galeria/16.jpg",
        big: "assets/images/galeria/16.jpg"
      },
      {
        small: "assets/images/galeria/17.jpg",
        medium: "assets/images/galeria/17.jpg",
        big: "assets/images/galeria/17.jpg"
      },
      {
        small: "assets/images/galeria/18.jpg",
        medium: "assets/images/galeria/18.jpg",
        big: "assets/images/galeria/18.jpg"
      },
      {
        small: "assets/images/galeria/19.jpg",
        medium: "assets/images/galeria/19.jpg",
        big: "assets/images/galeria/19.jpg"
      },
      {
        small: "assets/images/galeria/20.jpg",
        medium: "assets/images/galeria/20.jpg",
        big: "assets/images/galeria/20.jpg"
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
        small: "assets/images/galeria/22.jpg",
        medium: "assets/images/galeria/22.jpg",
        big: "assets/images/galeria/22.jpg"
      },
      {
        small: "assets/images/galeria/23.jpg",
        medium: "assets/images/galeria/23.jpg",
        big: "assets/images/galeria/23.jpg"
      },
      {
        small: "assets/images/galeria/24.jpg",
        medium: "assets/images/galeria/24.jpg",
        big: "assets/images/galeria/24.jpg"
      },
      {
        small: "assets/images/galeria/25.jpg",
        medium: "assets/images/galeria/25.jpg",
        big: "assets/images/galeria/25.jpg"
      },
      {
        small: "assets/images/galeria/26.jpg",
        medium: "assets/images/galeria/26.jpg",
        big: "assets/images/galeria/26.jpg"
      },
      {
        small: "assets/images/galeria/27.jpg",
        medium: "assets/images/galeria/27.jpg",
        big: "assets/images/galeria/27.jpg"
      },
      {
        small: "assets/images/galeria/28.jpg",
        medium: "assets/images/galeria/28.jpg",
        big: "assets/images/galeria/28.jpg"
      },
      {
        small: "assets/images/galeria/29.jpg",
        medium: "assets/images/galeria/29.jpg",
        big: "assets/images/galeria/29.jpg"
      },
      {
        small: "assets/images/galeria/30.jpg",
        medium: "assets/images/galeria/30.jpg",
        big: "assets/images/galeria/30.jpg"
      },
      {
        small: "assets/images/galeria/31.jpg",
        medium: "assets/images/galeria/31.jpg",
        big: "assets/images/galeria/31.JPG"
      },
      {
        small: "assets/images/galeria/32.JPG",
        medium: "assets/images/galeria/32.JPG",
        big: "assets/images/galeria/32.JPG"
      },
      {
        small: "assets/images/galeria/33.jpg",
        medium: "assets/images/galeria/33.jpg",
        big: "assets/images/galeria/33.jpg"
      },
      {
        small: "assets/images/galeria/34.jpg",
        medium: "assets/images/galeria/34.jpg",
        big: "assets/images/galeria/34.jpg"
      },
      {
        small: "assets/images/galeria/35.jpg",
        medium: "assets/images/galeria/35.jpg",
        big: "assets/images/galeria/35.jpg"
      },
      {
        small: "assets/images/galeria/2.jpg",
        medium: "assets/images/galeria/2.jpg",
        big: "assets/images/galeria/2.jpg"
      },
      {
        small: "assets/images/galeria/3.jpg",
        medium: "assets/images/galeria/3.jpg",
        big: "assets/images/galeria/3.jpg"
      }
    ];
  }
}

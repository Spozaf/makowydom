import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";

@Component({
  selector: "app-gallery-page",
  templateUrl: "./gallery-page.component.html",
  styleUrls: ["./gallery-page.component.scss"]
})
export class GalleryPageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit() {
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

    this.galleryImages = [
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      },
      {
        small: "./../../assets/images/Okolica/krakow.jpg",
        medium: "./../../assets/images/Okolica/krakow.jpg",
        big: "./../../assets/images/Okolica/krakow.jpg"
      }
    ];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartament-page',
  templateUrl: './apartament-page.component.html',
  styleUrls: ['./apartament-page.component.scss']
})
export class ApartamentPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
  //"centerPadding": '60px',
  "centerMode": true,
  "slidesToShow": 3, 
  "slidesToScroll": 1,
  "infinite": true,
  "autoplay": true,
  "autoplaySpeed": 2000,
  "dots": true,
  };

}

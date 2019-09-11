import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartament-page',
  templateUrl: './apartament-page.component.html',
  styleUrls: ['./apartament-page.component.scss']
})
export class ApartamentPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var img0 = new Image();
    img0.src="./../../assets/images/apartament/kuchnianew-min.jpg";
    var img1 = new Image();
    img1.src="./../../assets/images/apartament/lazeinkanew-min.jpg";
    var img2 = new Image();
    img2.src="./../../assets/images/apartament/pokojnew-min.jpg";
    var img3 = new Image();
    img3.src="./../../assets/images/apartament/tarasnew-min.jpg";
    var img4 = new Image();
    img4.src="./../../assets/images/apartament/salonnew-min.jpg";
    
  }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
  //"centerPadding": '60px',
  "centerMode": true,
  "slidesToShow": 5, 
  "slidesToScroll": 1,
  "infinite": true,
  "autoplay": true,
  "autoplaySpeed": 2000,
  //"dots": true,
  };

}

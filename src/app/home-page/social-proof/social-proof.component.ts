import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-proof',
  templateUrl: './social-proof.component.html',
  styleUrls: ['./social-proof.component.scss']
})
export class SocialProofComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
  //"centerPadding": '15.5rem',
  "centerMode": true,
  "slidesToShow": 3, 
  "slidesToScroll": 1,
  "infinite": true,
  //"autoplay": true,
  //"autoplaySpeed": 500,
  //"dots": true,
  //"arrows": false,
  "speed": 3000
  };
}

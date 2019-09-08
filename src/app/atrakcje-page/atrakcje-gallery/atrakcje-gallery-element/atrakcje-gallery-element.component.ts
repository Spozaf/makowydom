import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atrakcje-gallery-element',
  templateUrl: './atrakcje-gallery-element.component.html',
  styleUrls: ['./atrakcje-gallery-element.component.scss']
})
export class AtrakcjeGalleryElementComponent implements OnInit {
  @Input() photoOne: string = './../../../../assets/images/dlagosci/grill/jedzenie-min.jpg';
  @Input() photoOnePosition: string = 'center bottom';
  @Input() photoTwo: string = './../../../../assets/images/dlagosci/grill/ogien1-min.jpg';
  @Input() photoTwoPosition: string = 'center center';
  @Input() photoThree: string = './../../../../assets/images/dlagosci/grill/grill2-min.JPG';
  @Input() photoThreePosition: string = 'center center';
  @Input() photoFour: string = './../../../../assets/images/dlagosci/grill/salatka1-min.JPG';
  @Input() photoFourPosition: string = 'center center';
  @Input() photoFive: string = './../../../../assets/images/dlagosci/grill/ogien2-min.jpg';
  @Input() photoFivePosition: string = 'center center';
  @Input() isLeft: boolean = true;
  @Input() nazwa: string;
  @Input() elementOne: string;
  @Input() elementTwo: string;
  @Input() elementThree: string;
  constructor() { }

  ngOnInit() {
  }

}

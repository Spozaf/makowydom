import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atrakcje-gallery-element',
  templateUrl: './atrakcje-gallery-element.component.html',
  styleUrls: ['./atrakcje-gallery-element.component.scss']
})
export class AtrakcjeGalleryElementComponent implements OnInit {
  @Input() photoOne: string = './../../../../assets/images/Okolica/Miasta/wieliczka1.jpg';
  @Input() photoOnePosition: string = 'center bottom';
  @Input() photoTwo: string = './../../../../assets/images/Okolica/Miasta/krakow1.jpg';
  @Input() photoTwoPosition: string = 'center center';
  @Input() photoThree: string = './../../../../assets/images/Okolica/Miasta/krakow2.jpg';
  @Input() photoThreePosition: string = 'center center';
  @Input() photoFour: string = './../../../../assets/images/Okolica/Miasta/nowysacz1.jpg';
  @Input() photoFourPosition: string = 'center center';
  @Input() photoFive: string = './../../../../assets/images/Okolica/Miasta/wieliczka2.jpg';
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

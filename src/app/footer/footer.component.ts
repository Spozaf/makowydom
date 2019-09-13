import { Component, OnInit } from '@angular/core';
import { ResponsiveSizeService } from '../services/responsive-size.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isMobile: boolean;
  constructor(private respService: ResponsiveSizeService) { }

  ngOnInit() {
    if(this.respService.getScreenSize()>3){
      this.isMobile = true;
    }
  }

}

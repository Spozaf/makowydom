import { Component, OnInit } from '@angular/core';
import { ResponsiveSizeService } from 'src/app/services/responsive-size.service';

@Component({
  selector: 'app-site-parts',
  templateUrl: './site-parts.component.html',
  styleUrls: ['./site-parts.component.scss']
})
export class SitePartsComponent implements OnInit {

  constructor(private respService: ResponsiveSizeService) { }

  isPhone: boolean = false;
  ngOnInit() {
    if(this.respService.getScreenSize() == 4){
      this.isPhone=true;
    }
  }

}

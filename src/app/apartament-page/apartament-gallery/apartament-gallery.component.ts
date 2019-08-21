import { Component, OnInit } from '@angular/core';
import { Room } from './room.model';

@Component({
  selector: 'app-apartament-gallery',
  templateUrl: './apartament-gallery.component.html',
  styleUrls: ['./apartament-gallery.component.scss']
})
export class ApartamentGalleryComponent implements OnInit {

  private rooms: Room[];

  constructor() { }

  ngOnInit() {
  }

}

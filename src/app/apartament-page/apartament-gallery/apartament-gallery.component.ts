import { Component, OnInit } from '@angular/core';
import { Room } from './room.model';

@Component({
  selector: 'app-apartament-gallery',
  templateUrl: './apartament-gallery.component.html',
  styleUrls: ['./apartament-gallery.component.scss']
})
export class ApartamentGalleryComponent implements OnInit {

  public rooms: Room[];

  private salon = new Room('Salon', 'To jest salon', './../../../../assets/images/apartament/salon-web.jpg');
  private kuchnia = new Room('Kuchnia', 'To jest kuchnia', './../../../../assets/images/apartament/kuchnia-web.jpg');
  private pokoj = new Room('Pokój', 'To jest pokój', './../../../../assets/images/apartament/pokoj-web.jpg');
  private blakon = new Room('Balkon', 'To jest balkon', './../../../../assets/images/apartament/taras-web.jpg');
  private lazienka = new Room('Łazienka', 'To jest lazienka', 'img./../../../../assets/images/apartament/lazienka-web.jpg');

  public mainInfo: Room = this.salon;
  public rowOne: Room = this.kuchnia;
  public rowTwo: Room = this.pokoj;
  public rowThree: Room = this.blakon;
  public rowFour: Room = this.lazienka;

  constructor() { }

  ngOnInit() {
    this.rooms = [
      this.salon, // 0
      this.kuchnia, // 1
      this.pokoj, // 2
      this.blakon, // 3
      this.lazienka // 4
  ]
  }

  onCheckRoomInfo(row: number){
    console.log('Click ' + row);
    var newMainIndex;
    var newRowIndex;
    switch(row) {
      case 1: {
        newRowIndex = this.rooms.indexOf(this.mainInfo);
        newMainIndex = this.rooms.indexOf(this.rowOne);
        this.mainInfo = this.rooms[newMainIndex];
        this.rowOne = this.rooms[newRowIndex];
        break;
      }
      case 2: {
        newRowIndex = this.rooms.indexOf(this.mainInfo);
        newMainIndex = this.rooms.indexOf(this.rowTwo);
        this.mainInfo = this.rooms[newMainIndex];
        this.rowTwo = this.rooms[newRowIndex];
        break;
      }
      case 3: {
        newRowIndex = this.rooms.indexOf(this.mainInfo);
        newMainIndex = this.rooms.indexOf(this.rowThree);
        this.mainInfo = this.rooms[newMainIndex];
        this.rowThree = this.rooms[newRowIndex];
        break;
      }
      case 4: {
        newRowIndex = this.rooms.indexOf(this.mainInfo);
        newMainIndex = this.rooms.indexOf(this.rowFour);
        this.mainInfo = this.rooms[newMainIndex];
        this.rowFour = this.rooms[newRowIndex];
        break;
      }
      default: {
        this.mainInfo = this.salon;
        this.rowOne = this.kuchnia;
        this.rowTwo = this.pokoj;
        this.rowThree = this.blakon;
        this.rowFour = this.lazienka;
        break;
      }
    }
    
    

  }

}

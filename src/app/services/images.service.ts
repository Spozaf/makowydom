import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  images = new Array();
  preloadImg = [
    "assets/images/main-page/LogoMakowyDom.png",
    "assets/images/main-page/HomePageImage-min.JPG",
    "assets/images/main-page/dom2-min.jpg",
    "assets/images/faces/b1-min.jpg",
    "assets/images/faces/b2-min.jpg",
    "assets/images/faces/b3-min.jpg",
    "assets/images/faces/b4-min.jpg",
    "assets/images/faces/b5-min.jpg",
    "assets/images/faces/b6-min.jpg",
    "assets/images/faces/b7-min.jpg",
    "assets/images/faces/g1-min.jpg",
    "assets/images/faces/g2-min.jpg",
    "assets/images/faces/g3-min.jpg",
    "assets/images/faces/g4-min.jpg",
    "assets/images/faces/g5-min.jpg",
    "assets/images/faces/kora-min.jpg",
    "assets/images/icons/big/user.png",
    "assets/images/icons/big/bed.png",
    "assets/images/icons/big/kitchen.png",
    "assets/images/icons/big/shower.png",
    "assets/images/icons/big/balcony.png",
    "assets/images/icons/big/wifiNew.png",
    "assets/images/icons/big/phone-call.png",
    "assets/images/icons/big/comment.png",
    "assets/images/icons/big/whatsapp.png",
    "assets/images/icons/big/couch.png",
    "assets/images/apartament/salon-web-min.jpg",
    "assets/images/dlagosci/grill/grill2-min.JPG",
    "assets/images/apartament/kuchnianew-min.jpg",
    "assets/images/apartament/lazeinkanew-min.jpg",
    "assets/images/apartament/pokojnew-min.jpg",
    "assets/images/apartament/salonnew-min.jpg",
    "assets/images/apartament/tarasnew-min.jpg",
    "assets/images/dlagosci/main/gry-min.JPG",
    "assets/images/dlagosci/main/grzyby-min.jpg",
    "assets/images/dlagosci/main/grzyby2-min.jpg",
    "assets/images/dlagosci/main/salasz-min.jpg",
    "assets/images/dlagosci/main/salatka1-min.jpg",
    "assets/images/dlagosci/grill/jedzenie-min.jpg",
    "assets/images/dlagosci/grill/salatka1-min.JPG",
    "assets/images/dlagosci/grill/grill1-min.jpg",
    "assets/images/dlagosci/grill/ogien1-min.JPG",
    "assets/images/dlagosci/grill/ogien2-min.JPG",
    "assets/images/dlagosci/grzyby/g1-min.jpg",
    "assets/images/dlagosci/grzyby/g2-min.jpg",
    "assets/images/dlagosci/grzyby/g3-min.jpg",
    "assets/images/dlagosci/planszowki/5s-min.JPG",
    "assets/images/dlagosci/planszowki/doble-min.JPG",
    "assets/images/dlagosci/planszowki/euro-min.JPG",
    "assets/images/dlagosci/planszowki/karty-min.JPG",
    "assets/images/dlagosci/planszowki/lego-min.JPG",
    "assets/images/dlagosci/lasy/l1-min.jpg",
    "assets/images/dlagosci/lasy/l2-min.JPG",
    "assets/images/dlagosci/lasy/l3-min.JPG",
    "assets/images/dlagosci/lasy/l4-min.JPG",
    "assets/images/dlagosci/lasy/l5-min.jpg",
    "assets/images/dlagosci/lasy/l5-min.jpg",
    "assets/images/icons/big/car.png",
    "assets/images/Okolica/krakow-min.jpg",
    "assets/images/Okolica/limanowaski2-min.jpg",
    "assets/images/Okolica/wieliczka1-min.jpg",
    "assets/images/Okolica/zakopane-min.jpg",
    "assets/images/Okolica/nowysacz-min.jpg",
    "assets/images/Okolica/paproc2-min.jpg",
    "assets/images/Okolica/pasierbiec-min.jpg",
    "assets/images/Okolica/rabkoland1-min.jpg",
    "assets/images/Okolica/szaflary-min.jpg",
    "assets/images/galeria/1.jpg",
    "assets/images/galeria/2.jpg",
    "assets/images/galeria/3.JPG",
    "assets/images/galeria/4.JPG",
    "assets/images/galeria/5.JPG",
    "assets/images/galeria/6.JPG",
    "assets/images/galeria/7.JPG",
    "assets/images/galeria/8.JPG",
    "assets/images/galeria/9.JPG",
    "assets/images/galeria/10.JPG",
    "assets/images/galeria/11.JPG",
    "assets/images/galeria/12.JPG",
    "assets/images/galeria/13.JPG",
    "assets/images/galeria/14.JPG",
    "assets/images/galeria/15.JPG",
    "assets/images/galeria/16.JPG",
    "assets/images/galeria/17.JPG",
    "assets/images/galeria/18.JPG",
    "assets/images/galeria/19.JPG",
    "assets/images/galeria/20.JPG",
    "assets/images/galeria/21.JPG",
    "assets/images/galeria/22.JPG",
    "assets/images/galeria/23.JPG",
    "assets/images/galeria/24.JPG",
    "assets/images/galeria/25.JPG",
    "assets/images/galeria/26.JPG",
    "assets/images/galeria/27.JPG",
    "assets/images/galeria/28.JPG",
    "assets/images/galeria/29.JPG",
    "assets/images/galeria/30.JPG",
    "assets/images/galeria/31.JPG",
    "assets/images/galeria/32.JPG",
    "assets/images/galeria/33.JPG",
    "assets/images/galeria/34.JPG",
    "assets/images/galeria/35.JPG",
    "assets/images/icons/big/fire.png",
    "assets/images/icons/big/backgammon.png",
    "assets/images/icons/big/washing-machine.png"
  ]
  preload() {
    for (var i = 0; i < this.preloadImg.length; i++) {
      this.images[i] = new Image()
      this.images[i].src = this.preloadImg[i]
    }
  }

}

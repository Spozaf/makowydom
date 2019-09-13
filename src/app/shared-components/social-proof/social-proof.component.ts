import { Component, OnInit } from '@angular/core';
import { ResponsiveSizeService } from 'src/app/services/responsive-size.service';

@Component({
  selector: 'app-social-proof',
  templateUrl: './social-proof.component.html',
  styleUrls: ['./social-proof.component.scss']
})
export class SocialProofComponent implements OnInit {

  constructor(private respService: ResponsiveSizeService) { }
  screen: number;
  slideConfig: any;

  ngOnInit() {
    this.screen = this.respService.getScreenSize();
    if(this.screen == 3){
      this.slideConfig = {
        //"centerPadding": '15.5rem',
        "centerMode": true,
        "slidesToShow": 2, 
        "slidesToScroll": 1,
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 3000,
        //"dots": true,
        //"arrows": false,
        "speed": 3000
        };
    }
    else if(this.screen == 4) {
      this.slideConfig = {
        //"centerPadding": '15.5rem',
        "centerMode": true,
        "slidesToShow": 1, 
        "slidesToScroll": 1,
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 3000,
        //"dots": true,
        //"arrows": false,
        "speed": 3000
        };
    }
    else {
      this.slideConfig = {
        //"centerPadding": '15.5rem',
        "centerMode": true,
        "slidesToShow": 3, 
        "slidesToScroll": 1,
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 3000,
        //"dots": true,
        //"arrows": false,
        "speed": 3000
        };
    }
  }

  slides = [
    {
      img: "assets/images/faces/kora-min.jpg",
      name: "Kornelia",
      portal: "Facebook",
      opinia: "Makowy Dom to miejsce gdzie tak naprawdę można odpocząć. Piękne widoki. Przez dzień cisza, w nocy śpiew świerszczy."
    },
    {
      img: "assets/images/faces/b2-min.jpg",
      name: "Johann",
      portal: "Booking",
      opinia: "Absolutnie spokojne i piękne miejsce otoczone naturą. Apartament jest piekny i czysty a gospodarz bardzo sympatyczny."
    },
    {
      img: "assets/images/faces/g1-min.jpg",
      name: "Marta",
      portal: "Airbnb",
      opinia: "Fantastyczne miejsce z pięknymi widokami, w którym czujesz się jak w domu za sprawą bardzo miłych i pomocnych opiekunów domostwa."
    },
    {
      img: "assets/images/faces/g2-min.jpg",
      name: "Sonia",
      portal: "Facebook",
      opinia: "Piękne miejsce, bardzo komfortowo się tam czuliśmy."
    },
    {
      img: "assets/images/faces/b1-min.jpg",
      name: "Stefano",
      portal: "Airbnb",
      opinia: "Wspaniałe miejsce dla tych, którzy kochają przyrodę i relaksujące wakacje."
    },
    {
      img: "assets/images/faces/b3-min.jpg",
      name: "Michał",
      portal: "Booking",
      opinia: "Wartość do ceny jest nie do pobicia! Miejsce jest perfekcyjnie czyste."
    },
    {
      img: "assets/images/faces/b4-min.jpg",
      name: "Andriy",
      portal: "Airbnb",
      opinia: "Najlepsze miejsce do prawdziwego relaksu. Grzyby i leśne owoce rosną w okolicy. Spędziliśmy tu wspaniały czas!"
    },
    {
      img: "assets/images/faces/g4-min.jpg",
      name: "Dorota",
      portal: "Facebook",
      opinia: "Piekny apartament i widoki. Polecam każdemu kto chce odpocząć od szarej codziennosci!"
    },
    {
      img: "assets/images/faces/b5-min.jpg",
      name: "Mikhail",
      portal: "Airbnb",
      opinia: "Miejsce idealne do relaksu w ciszy i spokoju. Gospodarz i jego rodzina są bardzo otwarci, mili i gościnni. Pomogą Ci jak tylko to możliwe."
    },
    {
      img: "assets/images/faces/b6-min.jpg",
      name: "Witold",
      portal: "Facebook",
      opinia: "Piękna okolica, wspaniałe widoki, cicho i spokojnie. Trochę trudno trafić ale gospodarza bardzo sympatyczni i pomocni."
    },
    {
      img: "assets/images/faces/b7-min.jpg",
      name: "Andrii",
      portal: "Airbnb",
      opinia: "Absolutnie perfekcyjna gościnność! Dziękujemy bardzo za te wspaniałe chwile!"
    },
    {
      img: "assets/images/faces/g5-min.jpg",
      name: "Kasia",
      portal: "Facebook",
      opinia: "Kto lubi ciszę, spokój i chce wypocząć to miejsce jest idealne, z dala od miejskiego zgiełku. Super warunki, przemili i pomocni właściciele, polecam!"
    }
  ];
  

}

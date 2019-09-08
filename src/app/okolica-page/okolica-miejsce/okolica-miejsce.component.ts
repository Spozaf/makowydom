import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-okolica-miejsce',
  templateUrl: './okolica-miejsce.component.html',
  styleUrls: ['./okolica-miejsce.component.scss']
})
export class OkolicaMiejsceComponent implements OnInit {

  @Input() backgroundImage: string = './../../../assets/images/Okolica/krakow-min.jpg';
  @Input() imgIsLeft: boolean = true;
  @Input() name: string = 'Kraków';
  @Input() opis: string = `Była stolica Polski. Przepiękne miasto, które każdy musi odwiedzić. Krakowski
  rynek wypełniony jest atrakcjami! Restauracje, puby, bary, dyskoteki, kawiarnie i
  co tylko wam się wymaży znajdziecie właśnie na Krakowskim rynku!
  W mieście znajduje się również aquapark, tor kartingowy czy escape roomy.
  Miejsce definitywnie warte odwiedzenia!`;
  @Input() czas: number = 60;
  constructor() { }

  ngOnInit() {
  }

}

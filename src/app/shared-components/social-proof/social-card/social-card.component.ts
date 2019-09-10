import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {

  @Input() backgroundImage: string = './../../../../assets/images/Sanja.jpg';
  @Input() imie: string = 'Sonia';
  @Input() portal: string = 'Rozdzinny wyjazd';
  @Input() opinia: string = 'Piękne miejsce. Bardzo komfortowo się tam czuliśmy.';
  constructor() { }

  ngOnInit() {
  }

}

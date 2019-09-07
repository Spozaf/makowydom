import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-okolica-page",
  templateUrl: "./okolica-page.component.html",
  styleUrls: ["./okolica-page.component.scss"]
})
export class OkolicaPageComponent implements OnInit {
  wieliczka: string = `
  Kopania soli w Wieliczce to jeden z najwspanialszych zabytków w Polsce. 
  Miejse rodznie odwiedzją miliony turystów z całego świata!
  Kopalnia wisana jest również na pierwszą Listę światowego dziedzictwa UNESCO.
  Jest to wielka i niesamowita kontrukcja, definitywnie nalezy ją odwiedzić! `;

  rabkoland: string = `
  Magiczne miejsce dla całej rodziny, uważane przez wielu fachowców branży parków
   rozrywki za najsympatyczniejszy i najlepiej zorganizowany park rozrywki w Polsce. 
   Wizyta w Rabkolandzie to doskonały 
   pomysł na urozmaicenie wakacji w Tatrach – za cały dzień zabawy 
   zapłacicie stałą cenę, niezależnie od ilości przejażdżek na karuzelach i 
   godzin spędzonych w niezwykłych bawialniach.`;

  nowysacz: string = `
   Jest to główny ośrodek przepięknej Ziemi Sądeckiej ze szczytami Beskidów
    na południu i zachodzie oraz Jeziorem Rożnowskim na północy. 
    Prócz tych niewątpliwych atrakcji turystycznych, cała Sądecczyzna słynie ze swoistej 
    kultury i tradycji, fascynującej przybyszów z innych części kraju.`;

  zakopane: string = `
   Potocznie nazywane zimową stolicą Polski. Definitywnie główny kierunek turystyczny Polski w
   czasie zimy. Miejsca takie jak Krupówki i Gubałówka przyciągają turystów z ałego świata.
   Wokół zakopanego znajduje się rónież mnóstwo szlaków gróskich między innymi słynna trasa na Giewont.`;
  
  szaflary: string = `
  To baseny termalne oraz aquapark otwarte cały rok! Woda w basenach bogata jest w sole mineralne, 
  które mają pozytywny wpływ na nasze zdrowie i samopoczucie. Ośrodek to nie tylko baseny termalne 
  ale rónież saunarium, zabiegi pielengnacyje i wiele więcej!  
  `;

  szczyty: string = `
  W okolicy Makowego Domu znajdują się trzy główne szczyty. Paproć, szczyt góry na której znajduje się
  nasz apartament. Limanowski Krzyż na Miejskiej Górze, popularne miejsce turystyczne tego rejonu. Widok 
  ze szczytu zapiera dech w piersiach. Łysa Góra, przepiękna góra na szczycie której znajduje się 
  stacja narciarska.  
  `;

  stacje: string = `
  W zimowym okresie blisko Makowego Domu działają dwie stacje narciarskie. Limanowa-Ski oraz
  Laskowa-Ski. Obie stacje zaiwrają trasy zarówno dla początkujących jak i dla tych bardziej 
  wymagających. Na stacjach znajdują się zarówno wyciągi orczykowe jak i kanapowe. Zapraszamy 
  do szusowania!  
  `;
  constructor() {}

  ngOnInit() {}
}

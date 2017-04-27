import { Component, OnInit, Input} from '@angular/core';
import{MonserviceService} from '../monservice.service';


@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css'],

})
export class TableauDeBordComponent implements OnInit {

  patrimoine;
  biens = [];

  lineChartData =
    [
      {
        data: [0, 1600, 1750, 1700, 2000, 1900, 1899],
        label: 'Multimédia'

      },

      {
        data: [0, 0, 0, 1000, 1500, 1300, 1250],
        label: 'Electroménager'

      },

      {
        data: [2000, 3000, 2670, 2660,2555, 2467, 2400],
        label: 'Mobilier'

      }
  ];

  lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];

  pieChartData = [2000,1500,2555];
  pieChartLabels = ['Multimédia', 'Eléctroménager', 'Mobilier'];

  constructor(private serviceBiens:MonserviceService) {}

  ngOnInit() {

    this.serviceBiens.getData().subscribe(biens => {
     this.biens = biens;
     this.calculPatrimoine();
     console.log(this.biens);
    });

  }



calculPatrimoine() {
    this.patrimoine = 0;

    for (let bien of this.biens) {
      this.patrimoine = this.patrimoine + Number(bien.prixachat);
    }
    console.log('patrimoine', this.patrimoine);
  }




}

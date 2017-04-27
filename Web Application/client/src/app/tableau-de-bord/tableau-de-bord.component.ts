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

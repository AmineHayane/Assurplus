import { Component, OnInit, Input} from '@angular/core';
import{MonserviceService} from '../monservice.service'; 


@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css'],

})
export class TableauDeBordComponent implements OnInit {

  patrimoine; 

  constructor(private serviceCalcul:MonserviceService) {}

  ngOnInit() { 

    this.calculPatrimoine(); 

  }


calculPatrimoine() {

this.serviceCalcul.calculPatrimoine().subscribe(

patrimoine => {
    
     this.patrimoine = patrimoine;

    }
); 

}




}

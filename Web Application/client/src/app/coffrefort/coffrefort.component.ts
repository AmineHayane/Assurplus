import {Component, OnInit, ElementRef, AfterViewChecked} from '@angular/core';
import {trigger, state, style, transition, animate } from '@angular/core';
import {Http} from '@angular/http';
import{MonserviceService} from '../monservice.service';
import {Animations} from '../animations/animations';
import {UploadsService} from '../fileupload/uploads.service';
import {DomSanitizer} from "@angular/platform-browser";
declare var jQuery : any;

@Component({
  selector: 'app-coffrefort',
  templateUrl: './coffrefort.component.html',
  styleUrls: ['./coffrefort.component.css'],
  animations: [Animations.modal(0.8, 1),

        trigger('focusInput', [
            state('inactive', style({

            })),
            state('active', style({

                transform: "rotate(45deg)",

            })),

            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out')),

        ]),

         trigger('showAction1', [
            state('inactive', style({

              visibility:"hidden",

            })),

            state('active', style({})),
            transition('inactive => active', animate('0ms 150ms')),
            transition('active => inactive', animate('0ms 0ms'))
        ]),

             trigger('showAction2', [
            state('inactive', style({

                 visibility:"hidden",

            })),

            state('active', style({

                  visibility:"visible",


            })),
            transition('inactive => active', animate('0s 300ms')),
            transition('active => inactive', animate('0s 0ms'))
        ]),

     trigger('showAction3', [
            state('inactive', style({

                 visibility:"hidden",


            })),

            state('active', style({

                  visibility:"visible",


            })),
            transition('inactive => active', animate('0s 450ms')),
            transition('active => inactive', animate('0s 0ms'))
        ]),


    ]

})

export class CoffrefortComponent implements OnInit, AfterViewChecked {

  state: string = 'inactive';
  biens=[];
  justifs = [];
  baseUrl = './uploads/Justificatifs/';
  safeUrl : any;
  justifsUrlSanitized = [];
  patrimoine;
  choixTabularMenu : string = 'Biens';

  constructor(private serviceBiens:MonserviceService, private elRef:ElementRef, private http:Http,
  private uploadsService : UploadsService, private sanitizer : DomSanitizer) { }

  ngOnInit()  {
    this.serviceBiens.getData().subscribe(biens => {
     this.biens = biens;
     this.calculPatrimoine();
     console.log(this.biens);
    });

    this.uploadsService.getJustificatifs().subscribe(justifs => {
      this.justifs = justifs;
      console.log(this.justifs);
      this.justifsUrlSanitized = justifs;
      console.log(this.justifsUrlSanitized);

    });

  }

  ngAfterViewChecked() {
      jQuery(this.elRef.nativeElement).find('.special.cards .image').dimmer({on : 'hover'});
  }

  calculPatrimoine() {
    this.patrimoine = 0;

    for (let bien of this.biens) {
      this.patrimoine = this.patrimoine + Number(bien.prixachat);
    }
    console.log('patrimoine', this.patrimoine);
  }

   toggleMove() {this.state = (this.state === 'inactive' ? 'active' : 'inactive');}

   closeActions(){this.state = (this.state === 'active' ? 'inactive' : 'inactive');}

  deleteObject(id){
    this.serviceBiens.deleteObject(id).subscribe();
  }

  deleteJustif(id) {
    this.uploadsService.deleteJustificatif(id).subscribe();
  }

  deleteOnView(i){
    this.biens.splice(i,1);
  }

  deleteJOnView(i) {
    this.justifs.splice(i,1);
  }

  showModal(url) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + url);
    console.log(this.safeUrl);
    jQuery(this.elRef.nativeElement).find('.ui.page.dimmer.pdf_file')
          .dimmer('setting', {transition : 'fade'}).dimmer('show');
  }

  closeModal() {
    jQuery(this.elRef.nativeElement).find('.ui.page.dimmer.pdf_file').dimmer('hide');
  }

  toggleJustifs() {
    this.choixTabularMenu = 'Justifs';
  }

  toggleBiens() {
    this.choixTabularMenu = 'Biens';
  }


}


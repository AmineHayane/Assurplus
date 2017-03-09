import { Component, OnInit, ElementRef, trigger, transition, style, animate, state, keyframes, HostListener} from '@angular/core';
declare var jQuery : any;
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-testngsem',
  templateUrl: './testngsem.component.html',
  styleUrls: ['./testngsem.component.css'],
  animations: [Animations.enterLeaveLeft, Animations.enterLeaveRight, Animations.scale(1.1),
  trigger('changeBngColor', [
      state('inactive', style({
        backgroundColor : '#008080'
      })),
      state('active',   style({
        backgroundColor: '#008080'
      })),
      transition('inactive => active', animate('2000ms ease-in')),
      transition('active => inactive', animate('2000ms ease-out'))
    ]),
    trigger('changeBngColorr', [
    transition('void => *', [
      style({backgroundColor: '#4D4E4E'}),
      animate('2000ms ease-in')
    ]),

  ]),
]
})
export class TestngsemComponent implements OnInit {
  constructor(private elref : ElementRef) { }

  SCALED : string[] = ['inactive', 'inactive', 'inactive'];
  scaleIn(i : number) {this.SCALED[i] = 'active'}
  scaleOut(i : number) {this.SCALED[i] = 'inactive'}

  APPEARED : boolean[] = [false, false, false];

  onScrolll(event : Event, menuChangePos : number, i : number) {
    if (window.pageYOffset >= menuChangePos) {this.APPEARED[i] = true;} else {this.APPEARED[i] = false;}
  }

  bngChanged ='inactive';




  isScrolled_50 : boolean = false;

  onScroll(event : Event, menuChangePos : number) {
    if (window.pageYOffset >= menuChangePos) {
      this.isScrolled_50 = true;
    } else {
      this.isScrolled_50 = false;
    }
  }


  animateButton() : any {
    jQuery(this.elref.nativeElement).find('.get_started').transition({
    animation  : 'scale',
    duration   : '2s',
  })
;
  }

  ngOnInit() : any {

    jQuery(this.elref.nativeElement).find('.special.cards .image').dimmer({
    on : 'hover'
  });


  }
}


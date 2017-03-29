import { Component, OnInit, ElementRef, trigger, transition, style, animate, state, keyframes, HostListener} from '@angular/core';
declare var jQuery : any;
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-testngsem',
  templateUrl: './testngsem.component.html',
  styleUrls: ['./testngsem.component.css'],
  animations: [Animations.flyInOrOutLeft, Animations.flyInOrOutRight, Animations.scale(1.1), Animations.fadeInOut,
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

  position : number = -600;
  myopacity : number = 0;

  SCALED : string[] = ['inactive', 'inactive', 'inactive'];
  scaleIn(i : number) {this.SCALED[i] = 'active'}
  scaleOut(i : number) {this.SCALED[i] = 'inactive'}

  APPEARED : boolean[] = [false, false, false];

  onScrolll(event : Event, menuChangePos : number, i : number) {
    if (window.pageYOffset >= menuChangePos) {this.APPEARED[i] = true;}
  }

  onScrollll(event : Event) {

    if (this.position <= -13) {
      this.position = -600 + window.pageYOffset;
      this.myopacity = window.pageYOffset/500;
    } else {
      if (window.pageYOffset < 591 ) {
      this.position = -13;
    }
    }


    /*console.log(window.pageYOffset);
    console.log(this.position);
    console.log(this.myopacity);*/
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






  }


}


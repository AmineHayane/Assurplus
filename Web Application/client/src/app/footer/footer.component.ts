import {Component, OnInit, ElementRef} from '@angular/core';
import {and} from "@angular/router/src/utils/collection";
declare var jQuery : any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  onFooter : boolean = false;

  toggleFooter() {
    this.onFooter = !this.onFooter;
}
  constructor(private elref : ElementRef) { }

    openSidebar() : any {
     jQuery(this.elref.nativeElement).find('.ui.sidebar.bottom').sidebar('show');
    }

    closeSidebar() : any {
      jQuery(this.elref.nativeElement).find('.ui.sidebar.bottom').sidebar('hide');
    }


    toggledBottomSidebar : boolean = false;

    onScroll(event : Event, changePos : number) {
    if (window.pageYOffset >= changePos) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
  }

  ngOnInit() {
  }

}

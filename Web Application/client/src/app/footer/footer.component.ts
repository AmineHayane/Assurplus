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

    onScroll(event : Event) {
      var yLeftToGo = document.body.scrollHeight - (window.pageYOffset + window.innerHeight);
      /*console.log(yLeftToGo);*/
    /*if (yLeftToGo === 0) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }*/
  }

  ngOnInit() {
  }

}

import {Component, trigger, animate, transition, style, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "./models/user";
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";
declare var jQuery : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, OnDestroy{
  title = 'My Post App!';
  user : User;
  message:String;
  subscription:Subscription;
  constructor(private elref:ElementRef, private authService:AuthenticationService, private router:Router) {
     this.subscription = authService.user$.subscribe((user) => this.user = user);
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    //example of verification
    this.authService.verify().subscribe( (res) => {
      console.log(res);
      this.message = res['message'];
      if (res['message'] == 'Failed to authenticate token.') {
        this.authService.logout();
        this.user = null;
        this.message = `Your session expired, you've been logged out`;
        this.router.navigate(['/login']);
      }
    }
    );
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.message = "Logged out";
    this.router.navigateByUrl('http://google.fr');
  }
  toggleLogin() : any {
        jQuery(this.elref.nativeElement).find('.ui.page.dimmer').dimmer('setting', {opacity : 1})
          .dimmer('setting', {transition : 'slide down'}).dimmer('show');
  }

  onNotify(status:boolean) {
    if (status == false) {
      console.log('not connected');
    } else {
      console.log('connected');
      jQuery(this.elref.nativeElement).find('.ui.page.dimmer').dimmer('hide');
    }
  }

  toggleSidebar() : any {
    /*alert(window.pageYOffset);*/
     jQuery(this.elref.nativeElement).find('.ui.sidebar.right').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    }

  isScrolled_50 : boolean = false;

  onScroll(event : Event, menuChangePos : number) {
    /*console.log(window.pageYOffset);*/
    if (window.pageYOffset >= menuChangePos) {
      this.isScrolled_50 = true;
    } else {
      this.isScrolled_50 = false;
    }
  }

}
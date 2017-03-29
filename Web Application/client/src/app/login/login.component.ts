import {Component, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {User} from "../models/user";
declare var jQuery:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:String;
  user:User;
  user_status:boolean;

  @Output() notify = new EventEmitter<boolean>();

  constructor(private authService:AuthenticationService, private router:Router) { this.user = new User; }

  ngOnInit() {
  }

  loginUser(user){
    this.authService.loginUser(user).subscribe( res => {
      console.log(res);
      this.user_status = res['success'];
      this.notify.emit(this.user_status);
      if(res['success'] == true) {
        this.authService.setUser(res['user']);
      } else {
        this.message = res['message'];
      }
    });
  }

}

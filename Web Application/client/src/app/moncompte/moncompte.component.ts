import { Component, OnInit, ElementRef, state, style, transition, animate, keyframes, trigger } from '@angular/core';
import{MonserviceService} from '../monservice.service';
import {Subscription} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

declare var jQuery : any;

@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css'],
  animations: [

        trigger('button', [

            transition('void => *', [

              animate(250, keyframes([

                style({transform: 'scale(0)'}),
                style({transform: 'scale(1)'}),

              ]))

            ])
  ])

  ]

})
export class MoncompteComponent implements OnInit {

  constructor(private elRef : ElementRef, private servicePassword : MonserviceService,
  private authService : AuthenticationService, private router:Router) {
    this.subscription = authService.user$.subscribe((user) => {
      this.userToken = user;
    });
  }

  isModified1 : Boolean = false;
  isModified2 : Boolean = false;
  isModified3 : Boolean = false;
  wrongPassword2:Boolean = false;
  responsePassword:String= "";
  UserPasswordConfirm:String;
  samePasswords: Boolean = true;
  changePasswordsuccess : Boolean = false;

  userToken : any;
  User : any;
  subscription:Subscription;
  keysUserObject = [];

  fakeUser = {
        AdressNumber:"1 ",
        AdressLabel:"Rue ",
        AdressLabelName:"Diderot",
        AdressZIPcode:"77420",
        AdressCity:"CHAMPS-SUR-MARNE",
        AdressCountry:"FRANCE",
    }

  ngOnInit() {
    this.userToken = JSON.parse(localStorage.getItem('currentUser'));
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    var userEmail = {
      user_mail : this.userToken.user_mail,
    }
    this.authService.retrieveUser(userEmail).subscribe((user) => {
      this.User = user;
      this.User.UserBirthDate = this.User.UserBirthDate.split('T')[0];
      console.log(this.User);
      for (var prop in this.User) {
        this.keysUserObject.push(prop);
      }
      console.log(this.keysUserObject);

    });
  }

getNewUserInfos(){
/* On récupère les infos du user photo, données perso etc */
}

showButton1(){
this.isModified1=true;
}

onSubmitInfos(data){

console.log(data);

for (var prop in data) {
      if (prop === this.keysUserObject[this.keysUserObject.indexOf(prop)]) {
        if (data[prop] !== undefined && data[prop] !== "") {
          this.User[prop] = data[prop];
        }
      } else {
        console.log('out');
      }
    }
  console.log(this.User);
this.authService.updateUser(this.User).subscribe((user) =>{
  console.log(user);
});
}

onSubmitHabitation(data) {
  console.log(data);
}

showEmailModification(){
  this.isModified2 = (this.isModified2 === false ? true : false);
}

onSubmitEmail(data){

 var newUserEmail = data;

 newUserEmail.UserEmail = this.User.user_mail;
 console.log(newUserEmail);

if (newUserEmail.newUserEmail == newUserEmail.newUserEmailConfirm) {
  this.authService.changeEmail(newUserEmail).subscribe((res)=> {
   console.log(res);
   if (res['success'] == true) {
     this.User.user_mail = res['user']['user_mail'];
     this.subscription.unsubscribe();
     window.location.assign('http://localhost:8000');
   }
 });
} else {
  console.log('Les deux Emails ne correspondent pas');
}
}


showPasswordModification(){
   this.isModified3= (this.isModified3 === false ? true : false);
   this.changePasswordsuccess = false;
   this.wrongPassword2 = false;
   this.samePasswords = true;
}

onSubmitPassword(data){

  var newUserPassword = data;
  newUserPassword.UserEmail = this.User.user_mail;
  console.log(newUserPassword);

  if (newUserPassword.newUserPassword == newUserPassword.newUserPasswordConfirm) {
    this.authService.changePassword(newUserPassword).subscribe((res) => {
      console.log(res);
    });
  } else {
    console.log('Les deux mots de passe ne correspondent pas');
  }
}

/*changePassword(dataPassword){

  console.log(dataPassword);

  if (dataPassword.newUserPassword == dataPassword.UserPasswordConfirm) {

  this.samePasswords = true;

  dataPassword.email= this.fakeUser.UserEmail;

  this.servicePassword.changePassword(dataPassword).subscribe( response => {

      this.responsePassword = response.message;

    });

  if (this.responsePassword !== "" ) {

    this.changePasswordsuccess = true;
    this.wrongPassword2=false;
    this.isModified3 = false;
  }

  else {

     this.changePasswordsuccess = false;
     this.wrongPassword2=true;

  }

}

else {

 this.samePasswords = false;

}

}*/



}

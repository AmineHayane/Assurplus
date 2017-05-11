import {
  Component, OnInit, ElementRef, state, style, transition, animate, keyframes, trigger, AfterViewChecked
} from '@angular/core';
import{MonserviceService} from '../monservice.service';
import {Subscription} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {isUndefined} from "util";

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
export class MoncompteComponent implements OnInit, AfterViewChecked {

  constructor(private elRef : ElementRef, private servicePassword : MonserviceService,
  private authService : AuthenticationService, private router:Router, private elref : ElementRef) {
    this.subscription = authService.user$.subscribe((user) => {
      this.userToken = user;
    });
  }

  isModified1 : Boolean = false;
  identityFieldsReadOnly : Boolean = true;
  identityModified : Boolean = false;

  isModifiedPhone : Boolean = false;

  isModified2 : Boolean = false;
  isModified3 : Boolean = false;
  wrongPassword2:Boolean = false;
  responsePassword:String= "";
  samePasswords: Boolean = true;
  changePasswordsuccess : Boolean = false;

  notFilled : number = 0;
  percentageProfile : number = 0;
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
      if (this.User.UserBirthDate !== undefined) {
      };
      console.log(this.User);
      for (var prop in this.User) {
        this.keysUserObject.push(prop);
        if (this.User[prop] == undefined || this.User[prop] == '') {
          console.log(prop);
          this.notFilled += 1;
        }
      }
      console.log(this.keysUserObject);
      console.log(this.notFilled);
      this.percentageCalcul(this.notFilled, this.keysUserObject.length);
    });

  }

  percentageCalcul(notFilled, length) {
    this.percentageProfile = Math.round(100 - (notFilled*100)/(length - 5));
  }

  redoPercentageCalcul() {
    var newKeysUserObject = [];
    var newNotFilled = 0;
    for (var prop in this.User) {
        newKeysUserObject.push(prop);
        if (this.User[prop] == undefined || this.User[prop] == '') {
          console.log(prop);
          newNotFilled += 1;
        }
      }
      console.log(newKeysUserObject);
      console.log(newNotFilled);
      this.percentageCalcul(newNotFilled, newKeysUserObject.length);
  }

  toggleReadOnlyFields() {
    this.identityFieldsReadOnly = (this.identityFieldsReadOnly === false ? true : false);
    this.isModified1 = true;
  }

  toggleAddPhone() {
    this.isModifiedPhone = true;
  }

  ngAfterViewChecked() {

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
  this.identityModified = true;
  console.log(this.identityModified);
  this.redoPercentageCalcul();
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
   this.isModified3 = (this.isModified3 === false ? true : false);
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

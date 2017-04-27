import { Component, OnInit, ElementRef, state, style, transition, animate, keyframes, trigger } from '@angular/core';
import{MonserviceService} from '../monservice.service';

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

  constructor(private elRef : ElementRef, private servicePassword : MonserviceService) { }

  isModified1 : Boolean = false;
  isModified2 : Boolean = false;
  isModified3 : Boolean = false;
  wrongPassword2:Boolean = false;
  responsePassword:String= "";
  newUserPassword:String;
  UserPasswordConfirm:String;
  samePasswords: Boolean = true;
  changePasswordsuccess : Boolean = false;


  fakeUser =

    {
        UserGender:"Homme",
        UserFirstName: "Amine",
        UserLastName: "HAYANE",
        UserLivingSituation:"Locataire",
        UserJob:"Etudiant",
        UserPaymentType:"Prélèvement SEPA",
        UserBirthDate:"28/11/1993",
        UserIdentityDocument:"",
        UserEmail:"amine.hayane@yahoo.fr",
        UserPhoneNumber:"0667874562",

        /* Adresse liée à l'habitation principale de l'utilisateur et qui devra être récupérée de la table Adress*/

        AdressNumber:"1 ",
        AdressLabel:"Rue ",
        AdressLabelName:"Diderot",
        AdressZIPcode:"77420",
        AdressCity:"CHAMPS-SUR-MARNE",
        AdressCountry:"FRANCE",

    }


  ngOnInit() {

  }

getNewUserInfos(){
/* On récupère les infos du user photo, données perso etc */
}

showButton1(){

this.isModified1=true;

}

showEmailModification(){

  this.isModified2 = (this.isModified2 === false ? true : false);



}

showPasswordModification(){

   this.isModified3= (this.isModified3 === false ? true : false);
   this.changePasswordsuccess = false;
   this.wrongPassword2 = false;
   this.samePasswords = true;


}


onSubmitInfos(data){

console.log(data)

var newUserInfos = data

}

onSubmitEmail(data){

 console.log(data)

 var newUserEmail = data

}

onSubmitPassword(data){

 console.log(data)

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

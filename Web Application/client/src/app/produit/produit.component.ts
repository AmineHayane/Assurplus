import { Component, OnInit } from '@angular/core';
import {objet} from './objet';
import {FileUploader} from "ng2-file-upload";
import {UploadsService} from "../fileupload/uploads.service";
import {Router} from "@angular/router";
import {Animations} from "../animations/animations";

declare var jQuery : any;

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  animations: [Animations.fadeInOut]
})
export class ProduitComponent implements OnInit {

    myObjet = new objet();
    userEmail : any;

    estimationValue : number = 0;
    duration : number;
    durationAnnee : number;

    itemPrediction : string;
    choixPhoto: Boolean =true;
    fileUploadWindow : Boolean = false;
    recognitionButton : Boolean = false;
    uploads:any = [];
    predicting : Boolean = false;
    predicted : Boolean = false;
    predictionAnswered : Boolean = false;
    predictionAccepted : Boolean = false;
    public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});

  constructor(private uploadsService:UploadsService, private router:Router) { }

  ngOnInit() {

      this.userEmail = {
        user_mail : JSON.parse(localStorage.getItem('currentUser')).user_mail,
      }

      this.uploader.onCompleteAll = function () {
        console.log('All uploads completed');
      };

      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        this.myObjet.imageurl = item.file.name;
        this.predicting = true;

      var newPrediction = {
        imgName : item.file.name
      }
        console.log(newPrediction);
        this.recognitionButton = true;
        this.uploadsService.getPrediction(newPrediction).subscribe((res) => {
          console.log(res);
          this.itemPrediction = res['prediction'];
          console.log(this.itemPrediction);
          if (res['prediction'] != undefined) {
            this.predicted = true;
          }
        });
        /*this.addUpload(item.file.name);*/
      };
  }

  acceptPrediction() {
    this.predictionAnswered = true;
    this.predictionAccepted = true;
    this.myObjet.description = this.itemPrediction;
  }

  refusePrediction() {
    this.predictionAnswered = true;
  }

  validateObject() {
    this.addUpload();
    window.location.assign('http://localhost:8000/coffrefort');
  }

  addUpload() {
    var newUpload = {
      imageurl : this.myObjet.imageurl,
      prixachat: this.myObjet.prixachat,
      description: this.myObjet.description,
      dateachat: this.myObjet.dateachat,
      user_mail : this.userEmail.user_mail,
    }

    console.log(newUpload);
    this.uploadsService.addUpload(newUpload).subscribe(upload => {
      this.uploads.push(upload);
      console.log(this.uploads);
    });
  }


  deleteUpload(uploadId) {
      var uploads = this.uploads;

      this.uploadsService.deleteUpload(uploadId).subscribe(() => {
                for(var i = 0;i < uploads.length;i++){
                    if(uploads[i].id == uploadId){
                        uploads.splice(i, 1);
                    }
                }
        });
  }

  getSubscribeUploads() {
      this.uploads = [];
      this.uploadsService.getAllUploads().subscribe(uploads => {
        this.uploads = uploads;
        console.log(uploads);
      });
  }

changeChoixPhoto() {
 this.choixPhoto = (this.choixPhoto === true ? false : true);
}

switch() {
    this.fileUploadWindow = (this.fileUploadWindow === true ? false : true);
}

computeDuration() {

this.duration = (Date.now()) - + (new Date(this.myObjet.dateachat));

this.durationAnnee = Math.trunc((this.duration /((8.64*10000000)*365)));

console.log(this.durationAnnee);
}

computeValue() {

  this.computeDuration();

     if (this.durationAnnee==0) {

     this.estimationValue= Math.round(this.myObjet.prixachat);
     console.log(this.myObjet.prixachat);
     console.log(this.estimationValue);

  }

    if (this.durationAnnee==1) {

     this.estimationValue = Math.round(this.myObjet.prixachat*0.8);

  }

  if (this.durationAnnee==2) {

     this.estimationValue= Math.round(this.myObjet.prixachat*0.6);

  }

  if (this.durationAnnee==3) {

     this.estimationValue= Math.round(this.myObjet.prixachat*0.4);

  }

  if (this.durationAnnee==4) {

     this.estimationValue= Math.round(this.myObjet.prixachat*0.2);

  }

  if (this.durationAnnee==5) {

     this.estimationValue= Math.round(this.myObjet.prixachat*0.05);

  }

  if (this.durationAnnee > 5) {

     this.estimationValue= Math.round(this.myObjet.prixachat*0);

  }

}




}


import {Component, OnInit, ElementRef} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {UploadsService} from "../fileupload/uploads.service";
import {Router} from "@angular/router";
import {justificatif} from './model';
import { DomSanitizer} from '@angular/platform-browser';
import { Animations } from '../animations/animations';
declare var jQuery : any;

@Component({
  selector: 'app-justificatifs',
  templateUrl: './justificatifs.component.html',
  styleUrls: ['./justificatifs.component.css'],
  animations : [Animations.modal(0.8, 1)]
})
export class JustificatifsComponent implements OnInit {

  myJustif = new justificatif();

  safeUrl : any;

  fileUploadWindow : Boolean = false;

  statebis : string = 'inactive';


   public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/uploadJustifs'});

  constructor(private uploadsService:UploadsService, private router:Router, private sanitizer : DomSanitizer,
              private elref : ElementRef) { }

  ngOnInit() {

      this.myJustif.type = 'Facture';

      this.uploader.onAfterAddingFile = function (fileItem) {
        console.log((fileItem.file.name).split('.').slice(-1)[0]);
        if ((fileItem.file.name).split('.').slice(-1)[0] != "pdf") {
          console.log('not a pdf file');
          fileItem.remove();
        } else {
          console.log('file added to the queue');
        }
      };

      this.uploader.onCompleteAll = function () {
        console.log('All uploads completed');
      };

      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        this.myJustif.fileurl = item.file.name;
        console.log(this.myJustif);
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('./uploads/Justificatifs/' + this.myJustif.fileurl);
        console.log(this.safeUrl);
        this.showModal();
      };
  }

  addUpload() {
    var newJustif = {
      fileurl : this.myJustif.fileurl,
      type: 'Facture',
    }
    this.uploadsService.addUploadJustif(newJustif).subscribe(justif => {
      console.log(justif);

    });
  }

  saveJustificatif() {
    jQuery(this.elref.nativeElement).find('.ui.page.dimmer.pdf_file').dimmer('hide');
    this.addUpload();
    this.router.navigateByUrl('/coffrefort');
  }

  cancelJustificatif() {
    jQuery(this.elref.nativeElement).find('.ui.page.dimmer.pdf_file').dimmer('hide');
    this.router.navigateByUrl('/');
  }

  showModal() {
    jQuery(this.elref.nativeElement).find('.ui.page.dimmer.pdf_file')
          .dimmer('setting', {transition : 'fade'}).dimmer('show');
    this.statebis='active';
  }





}

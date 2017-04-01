import {Component, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {UploadsService} from "./uploads.service";
declare var jQuery:any;

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

    uploads:any = [];

    public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'})

    constructor(private uploadsService:UploadsService) { }



  ngOnInit() {

      this.getSubscribeUploads();

      this.uploader.onCompleteAll = function () {
        console.log('All uploads completed');
      };

      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        this.addUpload(item.file.name);
      };
  }

  addUpload(url) {
    var newUpload = {
      url : url
    }

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

}

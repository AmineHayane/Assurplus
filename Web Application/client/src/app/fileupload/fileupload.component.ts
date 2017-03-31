import {Component, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
declare var jQuery:any;

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
    public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/upload'});
    constructor() { }

  ngOnInit() {
  }

}

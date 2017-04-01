import { Injectable } from '@angular/core';
import {Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UploadsService {

  constructor(private http:Http) { }

  getAllUploads() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('/api/uploads', {headers:headers}).map(res => res.json());
    }

  addUpload(newUpload) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/uploads', JSON.stringify(newUpload), {headers : headers})
      .map(res => res.json());
  }

  deleteUpload(uploadId) {
    return this.http.delete('/api/uploads/' + uploadId).map(res => res.json());
  }

}

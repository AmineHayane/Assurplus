import { Injectable } from '@angular/core';
import {Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UploadsService {

  constructor(private http:Http) { }

  getAllUploads() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('/api/objets', {headers:headers}).map(res => res.json());
    }

  addUpload(newUpload) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/ajoutobjet', JSON.stringify(newUpload), {headers : headers})
      .map(res => res.json());
  }

  deleteUpload(uploadId) {
    return this.http.delete('/api/supprimerobjet/' + uploadId).map(res => res.json());
  }

  getPrediction(newPrediction) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/prediction', JSON.stringify(newPrediction), {headers:headers}).map(res => res.json());
  }

}

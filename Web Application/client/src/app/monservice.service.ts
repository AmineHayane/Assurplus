import {Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MonserviceService {

  private url : string = "coffrefort/data.json"
   /* Url du serveur*/

  constructor(private http:Http) {}


  getData() {

    return this.http.get('/api/objets')
      .map(res => res.json());
  }


  getDataUser(userEmail) {
    var headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/objetsUser', JSON.stringify(userEmail), {headers:headers})
      .map(res => res.json());
  }

  AjoutObjet(newObject) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

     return this.http.post('/api/ajoutobjet', JSON.stringify(newObject), {headers:headers})
      .map(res => res.json());

  }

  deleteObject(id) {

     var headers = new Headers();
     headers.append('Content-Type', 'application/json');

    return this.http.delete('/api/supprimerobjet/' +id  ,{headers:headers})
    .map(res => res.json());

  }

  checkIdentity(infoConnexion) {

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return this.http.post('/api/connexion', JSON.stringify(infoConnexion), {headers:headers})
      .map(res => res.json());

  }

  calculPatrimoine(){

    return this.http.get('/api/calculpatrimoine')
      .map(res => res.json());

  }

}



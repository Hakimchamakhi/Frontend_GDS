import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BcService {

  AUTH_API ="http://localhost:8010/api/bc";
  constructor(private http: HttpClient) { }


  create(data) {
    return this.http.post(this.AUTH_API + '/create', data, httpOptions);
  }

  getall() {
    return this.http.get(this.AUTH_API + '/getall', httpOptions);
  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  
  AUTH_API ="http://localhost:8010/api/adminclient";
  constructor(private http: HttpClient) { }


  login(data): Observable<any> {
    return this.http.post(this.AUTH_API + '/login', data, httpOptions);
  }

}

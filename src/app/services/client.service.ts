import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  AUTH_API ="http://localhost:8010/api/client";
  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    return this.http.get(this.AUTH_API + `/getall`,httpOptions);
  }

  addClient(body:any){
    return this.http.post(this.AUTH_API + `/create`,body,httpOptions)
  }

  update(id,data): Observable<any> {
    return this.http.put(this.AUTH_API + `/update/${id}`, data, httpOptions);
  }

  delete(id): Observable<any> {
    return this.http.delete(this.AUTH_API + '/delete/'+id, httpOptions);
  }
}

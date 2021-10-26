import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchatserviceService {

  constructor(private http:HttpClient) { }
  addbc(body:any){
    return this.http.post("http://localhost:5000/bc",body)
  }
  deletebc(_id:any){
    return this.http.delete("http://localhost:5000/bc/"+_id)
  }
  updatebc(body:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/bc",body)
  }
  getbc(){
    return this.http.get("http://localhost:5000/bc")
  }
}

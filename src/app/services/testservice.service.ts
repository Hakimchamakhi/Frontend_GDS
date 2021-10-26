import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:HttpClient) { }
  addArticle(body:any){
    return this.http.post("http://localhost:5000/article",body)
  }
  deleteArticle(_id:any){
    return this.http.delete("http://localhost:5000/article/"+_id)
  }
  updateArticle(body:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/article",body)
  }
  getArticle(){
    return this.http.get("http://localhost:5000/article")
  }
  addClient(body:any){
    return this.http.post("http://localhost:5000/client",body)
  }
  deleteClient(_id:any){
    return this.http.delete("http://localhost:5000/client/"+_id)
  }
  updateClient(body:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/client",body)
  }
  getClient(){
    return this.http.get("http://localhost:5000/client")
  }
  addFournisseur(body:any){
    return this.http.post("http://localhost:5000/fournisseur",body)
  }
  updateFournisseur(body:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/fournisseur",body)
  }
  deleteFournisseur(_id:any){
    return this.http.delete("http://localhost:5000/fournisseur/"+_id)
  }
  getFournisseur(){
    return this.http.get("http://localhost:5000/fournisseur")
  }
  addFamille(body:any):Observable<any>{
    return this.http.post<any>("http://localhost:5000/famille",body)
  }
  updateFamille(body:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/famille",body)
  }
  deleteFamille(_id:any){
    return this.http.delete("http://localhost:5000/famille/"+_id)
  }
  getFamille(){
    return this.http.get("http://localhost:5000/famille")
  }
}

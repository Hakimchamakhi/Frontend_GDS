import { Component, OnInit } from '@angular/core';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-famille-article',
  templateUrl: './famille-article.component.html',
  styleUrls: ['./famille-article.component.css']
})
export class FamilleArticleComponent implements OnInit {

  constructor(private service:TestserviceService) { }
  faTrashAlt= faTrashAlt;
  faEdit= faEdit;
  _id:any;
  data:any;
  tdata:any;
  nom:any;
  codefam:any;
  nomup:any;
  codefamup:any;
  actif:any;
  actifup:any;

  ngOnInit(): void {
    this.getFamille()
  }
  getFamille(){
    this.service.getFamille().subscribe(data=>{
      this.tdata=data
      this.data=this.tdata;
    },error=>{
      console.log(error);
      
    })
  }
  addFamille(){
    const body = {nom:this.nom, codefam:this.codefam, actif:this.actif}
    this.service.addFamille(body).subscribe(data=>{
      this.nom="";
      this.codefam="";
      this.actif=false;
    this.getFamille()
    })
  }
  loadFamille(item:any){
    this._id=item._id;
    this.nomup=item.nom
    this.codefamup=item.codefam
    this.actifup=item.actif
  }
  updateFamille(){
    const body = {_id:this._id, nom:this.nomup, codefam:this.codefamup, actif:this.actifup}
    this.service.updateFamille(body).subscribe(data=>{  
      this.getFamille()
    })
  }
  deleteFamille(_id:any){
    this.service.deleteFamille(_id).subscribe(data=>{
      this.getFamille()
    })
  }

}
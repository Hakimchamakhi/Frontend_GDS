import { Component, OnInit } from '@angular/core';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FamilleService } from '../services/famille.service';

@Component({
  selector: 'app-famille-article',
  templateUrl: './famille-article.component.html',
  styleUrls: ['./famille-article.component.css']
})
export class FamilleArticleComponent implements OnInit {

  constructor(private service: FamilleService) { }
  faTrashAlt= faTrashAlt;
  faEdit= faEdit;
  id:any;
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
    this.service.getall().subscribe(data=>{
      this.tdata=data.data
      this.data=this.tdata;
    },error=>{
      console.log(error);
      
    })
  }
  addFamille(){
    const body = {nom:this.nom, codefam:this.codefam, actif:this.actif}
    this.service.create(body).subscribe(data=>{
      this.nom="";
      this.codefam="";
      this.actif=false;
    this.getFamille()
    })
  }
  loadFamille(item:any){
    this.id=item.id;
    this.nomup=item.nom
    this.codefamup=item.codefam
    this.actifup=item.actif
  }
  updateFamille(){
    const body = {id:this.id, nom:this.nomup, codefam:this.codefamup, actif:this.actifup}
    this.service.update(this.id,body).subscribe(data=>{  
      this.getFamille()
    })
  }
  deleteFamille(id:any){
    this.service.delete(id).subscribe(data=>{
      this.getFamille()
    })
  }

}
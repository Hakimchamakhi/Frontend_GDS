import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private service:TestserviceService) { }
  faTrashAlt= faTrashAlt;
  faEdit=faEdit;
  _id:any;
  data:any;
  tdata:any;
  fam:any;
  tfam:any;
  nom:any;
  unite:any;
  quantite: any;
  famille: any;
  pa: any;
  pv: any;
  marge: any;
  tva: any;
  nomup:any;
  uniteup:any;
  quantiteup: any;
  familleup: any;
  paup: any;
  pvup: any;
  margeup: any;
  tvaup: any;
  actif: any;
  actifup: any;
  ngOnInit(): void {
    this.getArticle()
    this.getFamille()
  }
  getArticle(){
    this.service.getArticle().subscribe(data=>{
      this.tdata=data
      this.data=this.tdata;
      
    },error=>{
      console.log(error);
      
    })
  }
  getFamille(){
    this.service.getFamille().subscribe(data=>{
      this.tfam=data
      this.fam=this.tfam;
    },error=>{
      console.log(error);
      
    })
  }

  loadArticle(item:any){
    this._id=item._id;
    this.nomup=item.nom
    this.uniteup=item.unite
    this.quantiteup=item.quantite
    this.familleup=item.famille
    this.paup=item.pa
    this.pvup=item.pv
    this.margeup=item.marge
    this.tvaup=item.tva
    this.actifup=item.actif
  }
  updateArticle(){
    const body = {_id:this._id, nom:this.nomup, unite:this.uniteup, actif:this.actifup,quantite:this.quantiteup, famille:this.familleup, pa:this.paup, pv:this.pvup, marge:this.margeup, tva:this.tvaup}
    this.service.updateArticle(body).subscribe(data=>{  
      this.getArticle()
    })
  }
  addArticle(){
    const body = {nom:this.nom, actif:this.actif, unite:this.unite, quantite:this.quantite, famille:this.famille, pa:this.pa, pv:this.pv, marge:this.marge, tva:this.tva}
    this.service.addArticle(body).subscribe(data=>{
      this.nom=""
      this.unite=""
      this.quantite=""
      this.famille=""
      this.pa=""
      this.pv=""
      this.marge=""
      this.tva=""
      this.actif=false
      this.getArticle()
    })
  }

  deleteArticle(_id:any){
    this.service.deleteArticle(_id).subscribe(data=>{
      this.getArticle()
    })
  }

}

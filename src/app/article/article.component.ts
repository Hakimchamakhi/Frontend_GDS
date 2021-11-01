import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';
import { FamilleService } from '../services/famille.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private service:ArticleService, private service2: FamilleService) { }
  faTrashAlt= faTrashAlt;
  faEdit=faEdit;
  id:any;
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
    this.service.getall().subscribe(data=>{
      this.tdata=data.data
      this.data=this.tdata;
      console.log(data)
    },error=>{
      console.log(error);
    })
  }
  getFamille(){
    this.service2.getall().subscribe(data=>{
      this.tfam=data.data
      this.fam=this.tfam;
    },error=>{
      console.log(error);
    })
  }

  loadArticle(item:any){
    this.id=item.id;
    this.nomup=item.nom
    this.uniteup=item.unite
    this.quantiteup=item.quantite
    this.familleup=item.famille.id
    this.paup=item.pa
    this.pvup=item.pv
    this.margeup=item.marge
    this.tvaup=item.tva
    this.actifup=item.actif
  }
  updateArticle(){
    const body = { nom:this.nomup, unite:this.uniteup, actif:this.actifup, quantite:this.quantiteup, famille_id:this.familleup, pa:this.paup, pv:this.pvup, marge:this.margeup, tva:this.tvaup}
    console.log(body);
    
    this.service.update(this.id,body).subscribe(data=>{  
      this.getArticle()
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }
  addArticle(){
    const body = {nom:this.nom, actif:this.actif, unite:this.unite, quantite:this.quantite, famille_id:this.famille, pa:this.pa, pv:this.pv, marge:this.marge, tva:this.tva}
    console.log(body)
    this.service.create(body).subscribe(data=>{
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

  deleteArticle(id:any){
    this.service.delete(id).subscribe(data=>{
      this.getArticle()
    })
  }

}

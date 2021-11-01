import { Component, OnInit, SimpleChanges } from '@angular/core';
import { faTrashAlt, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AchatserviceService } from '../services/achatservice.service';
import { ArticleService } from '../services/article.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-bc',
  templateUrl: './bc.component.html',
  styleUrls: ['./bc.component.css']
})
export class BcComponent implements OnInit {

  constructor(private service: AchatserviceService, private service2: ClientService, private service3: ArticleService) { }
  faTrashAlt= faTrashAlt;
  faEdit=faEdit;
  faInfoCircle=faInfoCircle;
  _id:any;
  data:any;
  tdata:any
  art:any=[];
  tart:any;
  clients:any
  tclients:any
  client:any;
  statut:any;
  prix:any
  clientup:any;
  statutup:any;
  prixup:any;
  articles:any=[]
  prixHT:any;
  sumtva:any
  prixTTC:any
  tva_0:any;
  tva_7:any;
  tva_10:any;
  tva_13:any;
  tva_19:any;
  tva_29:any;
  remiseTotal:any;
  

  ngOnInit(): void {
    this.getbc()
    this.getArticle()
  }
  sumprix(){
    this.prixHT=0
    this.sumtva=0
    this.prixTTC=0
    this.tva_0=0
    this.tva_7=0
    this.tva_10=0
    this.tva_13=0
    this.tva_19=0
    this.tva_29=0
    this.remiseTotal=0

    this.articles.map((i:any)=>{
      this.prixHT+=Number((i.prix-i.remise)*i.quantite)//.toFixed(3)
      this.sumtva+=(Number(i.tva/100*(i.prix-i.remise))*i.quantite)
      this.remiseTotal+=Number(i.remise*i.quantite)
      if(i.tva==0){this.tva_0+=Number(i.prix*i.quantite)}
      else if (i.tva==7){this.tva_7+=Number((i.prix-i.remise)*i.quantite)}
      else if (i.tva==10){this.tva_10+=Number((i.prix-i.remise)*i.quantite)}
      else if (i.tva==13){this.tva_13+=Number((i.prix-i.remise)*i.quantite)}
      else if (i.tva==19){this.tva_19+=Number((i.prix-i.remise)*i.quantite)}
      else if (i.tva==29){this.tva_29+=Number((i.prix-i.remise)*i.quantite)}
    })
    this.prixTTC=this.prixHT+this.sumtva
  }
  getArticle(){
    this.service3.getall().subscribe(data=>{
      this.tart=data.data
      this.art=this.tart;
    },error=>{
      console.log(error);
    })
  }
  getbc(){
    this.service.getbc().subscribe(data=>{
    this.tdata=data
    this.data=this.tdata;
    },error=>{
      console.log(error);
    })
  }
  getClient(){
    this.service2.getall().subscribe(data=>{
      this.tclients=data.data
      this.clients=this.tclients
    },error=>{
      console.log(error);
    })
  }

  loadbc(item:any){
    this._id=item._id;
    this.clientup=item.client
    this.statutup=item.statut
    this.prixup=item.prix
  }
  loadArticle(item:any){
    let x = this.art.filter((i:any)=>
      i.nom==item.article)
    this.art=this.tart.filter((i:any)=>{
      let find=false
        this.articles.forEach((el:any) =>{
          if(el.article==i.nom){
            find=true
          }
        });
        return !find
    })
    item.prix=x[0]?.pv||0
    item.tva=x[0]?.tva||0
    this.sumprix()
  }

  addbc(){
    const body = {client:this.client, articles:this.articles, prix:this.prixTTC}
    this.service.addbc(body).subscribe(data=>{
      console.log(this.articles)
      this.getbc()
    })
  }

  addLine(){
    this.articles.push({
      article:null,
      quantite:1,
      prix:"",
      remise:0,
      tva:0
    })
  }

  deleteLine(item:any){
    this.articles=this.articles.filter((i:any)=>
      i!=item
    )
    this.art=this.tart.filter((i:any)=>{
      let find=false
        this.articles.forEach((el:any) =>{
          if(el.article==i.nom){
            find=true
          }
        });
        return !find
    })
    this.sumprix()
  }

  updatebc(){
    const body = {_id:this._id, client:this.clientup, statut:this.statutup, prix:this.prixup}
    this.service.updatebc(body).subscribe(data=>{  
      this.getbc()
    })
  }

  deletebc(_id:any){
    this.service.deletebc(_id).subscribe(data=>{
      this.getbc()
    })
  }
}

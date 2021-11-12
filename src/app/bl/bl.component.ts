import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faTrashAlt, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AchatserviceService } from '../services/achatservice.service';
import { ArticleService } from '../services/article.service';
import { BcService } from '../services/bc.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-bl',
  templateUrl: './bl.component.html',
  styleUrls: ['./bl.component.css']
})
export class BlComponent implements OnInit {

  constructor(private service: BcService, private service2: ClientService, private service3: ArticleService) { }
  faTrashAlt= faTrashAlt;
  faEdit=faEdit;
  faInfoCircle=faInfoCircle;
  id:any;
  data:any;
  tdata:any
  bc:any;
  bcommandes:any;
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
  articlesup:any=[]
  temparticlesup:any;
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
  qtTotal:any;
  bcdata:any;
  bcdataup:any=[]
  ngOnInit(): void {
    this.getbc()
    this.getArticle()
    this.getClient()
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
      this.prixHT+=Number((i.prix-i.remise)*i.quantite)
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

  sumprixup(){
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

    this.articlesup.map((i:any)=>{
      this.prixHT+=Number((i.prixv-i.remise)*i.qt)//.toFixed(3)
      this.sumtva+=(Number(i.tva/100*(i.prixv-i.remise))*i.qt)
      this.remiseTotal+=Number(i.remise*i.qt)
      if(i.tva==0){this.tva_0+=Number(i.prixv*i.qt)}
      else if (i.tva==7){this.tva_7+=Number((i.prixv-i.remise)*i.qt)}
      else if (i.tva==10){this.tva_10+=Number((i.prixv-i.remise)*i.qt)}
      else if (i.tva==13){this.tva_13+=Number((i.prixv-i.remise)*i.qt)}
      else if (i.tva==19){this.tva_19+=Number((i.prixv-i.remise)*i.qt)}
      else if (i.tva==29){this.tva_29+=Number((i.prixv-i.remise)*i.qt)}
    })
    this.prixTTC=this.prixHT+this.sumtva
  }
  getArticle(){
    this.service3.getall().subscribe(data=>{
      this.tart=data.data
      this.art=this.tart;
    },error=>{
    })
  }
  getbc(){
    this.service.getall().subscribe(data=>{
      this.bcommandes=data
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
 compareWith(clientup,client){
   return clientup.cinMF === client.cinMF
 }
  
  loadbc(item:any){
      this.bcommandes.filter((x:any)=>{
        if (item.id==x.id){this.bcdataup.push(x)}
      })
      this.articlesup=[]
      this.temparticlesup=item.article
      this.temparticlesup.map((i:any)=>{
        this.articlesup.push(i.BcArticle)
      })
    this.id=item.id;
    this.clientup=item.client
    this.sumprixup()
    
  }
  loadArticle(item:any){
    let x = this.art.filter((i:any)=>
      i.id==item.article)
    this.art=this.tart.filter((i:any)=>{
      let find=false
        this.articles.forEach((el:any) =>{
          if(el.article==i.id){
            find=true
          }
        });
        return !find
    })
    item.prix=x[0]?.pv||0
    item.tva=x[0]?.tva||0
    this.sumprix()
  }
  loadArticleup(item:any){
    let x = this.art.filter((i:any)=>
      i.id==item.article_id)
    this.art=this.tart.filter((i:any)=>{
      let find=false
        this.articlesup.forEach((el:any) =>{
          if(el.article_id==i.id){
            find=true
          }
        });
        return !find
    })
    item.prixv=x[0]?.pv||0
    item.tva=x[0]?.tva||0
    item.qt=1
    this.sumprixup()
  }
  initArt(){
    this.art=this.tart.filter((i:any)=>{
      let find=false
        this.articlesup.forEach((el:any) =>{
          if(el.article_id==i.id){
            find=true
          }
        });
        return !find
    })
  }

  addbc(){

    const sum = this.articles.reduce((sum, current) => sum + Number(current.quantite),0);
    const body = {nbc:sum+"dfsd",client_id:this.client, articles:this.articles, prixTtc:this.prixTTC, prixHt:this.prixHT,tvaTotal:this.sumtva,remise:this.remiseTotal}
    
    this.service.create(body).subscribe(data=>{
      
      this.getbc()
    })
  }

  addLine(){
    this.articles.push({
      article:null,
      quantite:1,
      prix:0,
      remise:0,
      tva:0
    })
    this.sumprix()
  }
  addLineup(){
    this.articlesup.push({
      article:null,
      quantite:1,
      prix:0,
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
          if(el.article==i.id){
            find=true
          }
        });
        return !find
    })
    this.sumprix()
  }

  deleteLineup(item:any){
    this.articlesup=this.articlesup.filter((i:any)=>
      i!=item
    )
    this.art=this.tart.filter((i:any)=>{
      let find=false
        this.articlesup.forEach((el:any) =>{
          if(el.article==i.id){
            find=true
          }
        });
        return !find
    })
    this.sumprixup()
  }

  updatebc(){
    const body = {client_id:this.client,  prixTtc:this.prixTTC, prixHt:this.prixHT,tvaTotal:this.sumtva,remise:this.remiseTotal}
    const articles ={articles:this.articlesup}
    console.log("Body = ",body);
    console.log("Articles = ",articles);
    
    this.service.update(body,this.id).subscribe(data=>{      
      this.getbc()
    })

    this.service.updateArticles(articles,this.id).subscribe(data=>{      
      this.getbc()
    })
  }

  deletebc(id:any){
    this.service.delete(id).subscribe(data=>{      
      this.getbc()
    })
  }
}

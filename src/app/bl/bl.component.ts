import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faTrashAlt, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AchatserviceService } from '../services/achatservice.service';
import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-bl',
  templateUrl: './bl.component.html',
  styleUrls: ['./bl.component.css']
})
export class BlComponent implements OnInit {

  constructor(private service: AchatserviceService, private service2: TestserviceService) { }
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
  nbc:any;
  client:any;
  statut:any;
  prix:any
  nbcup:any;
  clientup:any;
  statutup:any;
  prixup:any;
  articles:any=[]
  prixHT=0;

  ngOnInit(): void {
    this.getbc()
    this.getArticle()
  }

  getArticle(){
    this.service2.getArticle().subscribe(data=>{
      this.tart=data
      this.art=this.tart;
    },error=>{
      console.log(error);
    })
  }
  adlll(){
    console.log(this.articles)
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
    this.service2.getClient().subscribe(data=>{
      this.tclients=data
      this.clients=this.tclients
    },error=>{
      console.log(error);
    })
  }

  loadbc(item:any){
    this._id=item._id;
    this.nbcup=item.nbc
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
    item.prix=x[0]?.pv
    item.tva=x[0]?.tva
  }

  addbc(){
    const body = {nbc:this.nbc, client:this.client, statut:this.statut, prix:this.prix}
    this.service.addbc(body).subscribe(data=>{
      this.nbc=""
      this.client=""
      this.statut=""
      this.prix=""
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
  }

  updatebc(){
    const body = {_id:this._id, nbc:this.nbcup, client:this.clientup, statut:this.statutup, prix:this.prixup}
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

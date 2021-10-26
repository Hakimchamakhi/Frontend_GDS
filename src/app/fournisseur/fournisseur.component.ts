import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private service:TestserviceService) { }
  faTrashAlt= faTrashAlt;
  faEdit= faEdit;
  _id:any;
  raisonS:any;
  tel:any;
  email:any;
  adresse:any;
  cinMF:any;
  data:any;
  tdata:any;
  actif:any;
  raisonSup:any;
  telup:any;
  emailup:any;
  adresseup:any;
  cinMFup:any;
  dataup:any;
  tdataup:any;
  actifup:any;

  ngOnInit(): void {
    this.getFournisseur()
  }
getFournisseur(){
  this.service.getFournisseur().subscribe(data=>{
    this.tdata=data
    this.data=this.tdata;
    
  },error=>{
    console.log(error);
    
  })
}

  addFournisseur(){
    const body = {raisonS:this.raisonS,tel:this.tel,email:this.email,adresse:this.adresse,cinMF:this.cinMF, actif:this.actif}
    this.service.addFournisseur(body).subscribe(data=>{
      this.raisonS=""
      this.tel=""
      this.email=""
      this.adresse=""
      this.cinMF=""
      this.actif=false
    this.getFournisseur()
    })
  }

  loadFournisseur(item:any){
    this._id=item._id
    this.raisonSup=item.raisonS
    this.telup=item.tel
    this.emailup=item.email
    this.adresseup=item.adresse
    this.cinMFup=item.cinMF
    this.actifup=item.actif
  }

  updateFournisseur(){
    const body = {_id:this._id, raisonS:this.raisonSup,tel:this.telup,email:this.emailup,adresse:this.adresseup,cinMF:this.cinMFup, actif:this.actifup}
    this.service.updateFournisseur(body).subscribe(data=>{  
      this.getFournisseur()
    })
  }

  deleteFournisseur(_id:any){
    this.service.deleteFournisseur(_id).subscribe(data=>{
      this.getFournisseur()
    })
  }

}

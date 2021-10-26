import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

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
    this.getClient()
  }
  getClient(){
    this.service.getClient().subscribe(data=>{
      this.tdata=data
      this.data=this.tdata;
      
    },error=>{
      console.log(error);
      
    })
  }
  addClient(){
    const body = {raisonS:this.raisonS,tel:this.tel,email:this.email,adresse:this.adresse,cinMF:this.cinMF, actif:this.actif}
    this.service.addClient(body).subscribe(data=>{
      this.raisonS=""
      this.tel=""
      this.email=""
      this.adresse=""
      this.cinMF=""
      this.actif=false
    this.getClient()
    })
  }
  loadClient(item:any){
    this._id=item._id
    this.raisonSup=item.raisonS
    this.telup=item.tel
    this.emailup=item.email
    this.adresseup=item.adresse
    this.cinMFup=item.cinMF
    this.actifup=item.actif
  }

  updateClient(){
    const body = {_id:this._id, raisonS:this.raisonSup,tel:this.telup,email:this.emailup,adresse:this.adresseup,cinMF:this.cinMFup, actif:this.actifup}
    this.service.updateClient(body).subscribe(data=>{  
      this.getClient()
    })
  }

  deleteClient(_id:any){
    this.service.deleteClient(_id).subscribe(data=>{
      this.getClient()
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from '../services/client.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service:ClientService , private token: TokenStorageService) { }
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
  user:any;
  ngOnInit(): void {
    this.user = this.token.getUser();
    this.getClient()
  }
  getClient(){
    this.service.getall().subscribe(data=>{
      this.tdata=data.data
      this.data=this.tdata;
      
    },error=>{
      console.log(error);
      
    })
  }
  addClient(){
    const body = {raisonS:this.raisonS,tel:this.tel,email:this.email,adresse:this.adresse,cinMF:this.cinMF, actif:this.actif ,adminclient_id:this.user.id}
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
    console.log(item);
    
    this._id=item.id
    this.raisonSup=item.raisonS
    this.telup=item.telephone
    this.emailup=item.email
    this.adresseup=item.adresse
    this.cinMFup=item.cinMF
    this.actifup=item.actif
  }

  updateClient(){
    const body = {raisonS:this.raisonSup,telephone:this.telup,email:this.emailup,adresse:this.adresseup,cinMF:this.cinMFup, actif:this.actifup,adminclient_id:this.user.id}
    console.log(this._id);
    
    this.service.update(this._id,body).subscribe(data=>{  
      this.getClient()
    })
  }

  deleteClient(_id:any){
    console.log(_id);
    
    this.service.delete(_id).subscribe(data=>{
      this.getClient()
    })
  }
}

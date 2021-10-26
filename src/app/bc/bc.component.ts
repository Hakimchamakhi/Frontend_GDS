import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AchatserviceService } from '../services/achatservice.service';
import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-bc',
  templateUrl: './bc.component.html',
  styleUrls: ['./bc.component.css']
})
export class BcComponent implements OnInit {

  constructor(private service: AchatserviceService, private service2: TestserviceService) { }
  faTrashAlt= faTrashAlt;
  faEdit=faEdit;
  faInfoCircle=faInfoCircle;
  _id:any;
  data:any;
  tdata:any;
  clients:any
  tclients:any
  nbc:any;
  client:any;
  statut:any;
  prix:any;  
  nbcup:any;
  clientup:any;
  statutup:any;
  prixup:any;
  

  ngOnInit(): void {
    this.getbc()
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

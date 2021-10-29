import { FouService } from './../services/fou.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServiceService } from '../services/auth-service.service';
import { TestserviceService } from '../services/testservice.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fouform: FormGroup;
  user:any;
  data:any;
  constructor(private token: TokenStorageService  , private fb: FormBuilder, private route: ActivatedRoute , private router: Router, private fservice: FouService ) { }
  ngOnInit(): void {
    this.user = this.token.getUser();

    this.getallfou(this.user.id);
    this.fouform = this.fb.group({
      cinMF: ['', Validators.required],
      email: ['', Validators.required],
      raisonS: ['', Validators.required],
      telephone: ['', Validators.required],
      actif: [false, Validators.required],
      adresse: ['', Validators.required],
      adminclient_id: [this.user.id, Validators.required],
    })
  }

  onsubmit(){
    const notyf = new Notyf({
      duration: 4000,
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'warning',
          background: 'orange',
          icon: {
            className: 'material-icons',
            tagName: 'i',
            text: 'warning'
          }
        },
        {
          type: 'error',
          background: 'red',
          duration: 2000,
          dismissible: true
        }
      ]
    });
    this.fservice.create(this.fouform.value).subscribe(
      data => {
        notyf.success('Fournisseure ajouté');
        this.getallfou(this.user.id);

      },
      err => {
        console.log(err);
        
        notyf.error(err.error.message);

      }
    );
  }
getallfou(id){
  this.fservice.getall(id).subscribe(data=>{
     this.data=data.data;
     
  },error=>{

  });
}


}

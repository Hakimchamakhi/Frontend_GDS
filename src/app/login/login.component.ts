import { AuthServiceService } from './../services/auth-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { Notyf } from 'notyf';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  currentUser:any;
  load = false;
  a=true;
  b=false;
  @ViewChild('password') password:ElementRef;
 
  constructor(private spinner: NgxSpinnerService,private tokenStorage: TokenStorageService  , private fb: FormBuilder, private route: ActivatedRoute , private router: Router, private authservice: AuthServiceService ) {
   
   }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(){
    this.spinner.show();
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
    this.authservice.login(this.loginform.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data.user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;     
        notyf.success('Bienvenu');
        this.router.navigate(['homeapp']).then(() => {
          window.location.reload();
        });
      },
      err => {
        this.spinner.hide();
        notyf.error(err.error.message);

      }
    );
    
  }
show(){
  
  var x =this.password.nativeElement;
 
  if (x.type === "password") {
    x.type = "text";
    x.style.display = "";
    this.a=false;
    this.b=true;

  } else {
    x.type = "password";
    x.style.display = "";
    this.b=false;
    this.a=true;
  }
  
}
 
}



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser:any;
  constructor(private token: TokenStorageService,private router: Router) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
  }
  logout(){
    this.token.signOut();
    this.router.navigate(['login']);
  }
}

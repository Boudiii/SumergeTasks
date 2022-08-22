import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  disable: boolean = true;
  constructor(private auth: AuthenticateService) { 
    
  }
  
  ngOnInit(): void {
  }
  alert() {
    alert("Log in!")
  }
  checkAuth(): boolean {
    if (this.auth.loggedIn)
      this.disable = false;
    else {
      this.disable = true;
    }
    return this.disable;
    
    
  }
}

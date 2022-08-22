import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  loggedIn:any;

  constructor() { }
  users = {
    "username": "boudi@test.com",
    "password": "test"
  }
  authenticate(user: string, password: string) {
    console.log(user, password)
    
    if (this.users.username == user && this.users.password == password) {
      this.login();
      return this.loggedIn
    } else {
      return false;
    }
    
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
    console.log(this.loggedIn);
  }
}

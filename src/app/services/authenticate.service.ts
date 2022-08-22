import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  loggedIn = false;

  constructor() { }
  users = {
    "username": "boudi@test.com",
    "password": "test"
  }
  authenticate(user: string, password: string) {
    console.log(user,password)
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
}

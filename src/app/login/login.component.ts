import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm) {
    console.log(form.value);
    const navigationExtras: NavigationExtras = {
      state: {
        username: form.value.email,
        password:form.value.password
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['/', 'popular_movies'], navigationExtras);
  }
}

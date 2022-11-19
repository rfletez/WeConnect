import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  joinAsCoach() {
    this.router.navigate(['/signup/coaches']); //route path: '/signup/coaches', component: SignupComponent
  }
  loginAsCoach() {
    this.router.navigate(['/login/coaches']); //route path: '/login/coaches', component: LoginComponent
  }

  joinAsUser() {
    this.router.navigate(['/signup/users']); //route path: '/signup/users', component: SignupComponent
  }
  loginAsUser() {
    this.router.navigate(['/login/users']); //route path: '/login/users', component: LoginComponent
  }

}

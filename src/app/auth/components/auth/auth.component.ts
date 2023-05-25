import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    // this.authService.login();
    this.router.navigate(['auth', 'profile'])
  }
}

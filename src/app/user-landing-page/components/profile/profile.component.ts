import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LandingPageComponent } from 'src/app/landing-page/components/landing-page/landing-page.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    console.log("kommer vi her?")
    this.authService.onLogout();
    this.router.navigateByUrl('/');
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  login() {
    this.authService.onLogin();
    this.router.navigate(['profile']);
  }

  register() {
    console.log('kommer vi her?');
    this.modalCtrl.create({ component: RegisterComponent }).then((modalEl) => {
      modalEl.present();
    });
  }
}

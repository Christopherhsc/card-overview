import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  login() {
    this.isLoading = true;
    this.authService.onLogin();
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in ...' })
      .then((loadingEl) => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigate(['profile']);
        }, 1000);
      });
  }

  register() {
    this.modalCtrl.create({ component: RegisterComponent }).then((modalEl) => {
      modalEl.present();
    });
  }
}

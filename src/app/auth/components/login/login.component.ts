import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm!: FormGroup;

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

  submitForm() {
    if (this.loginForm.valid) {
      // Perform login logic here
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      console.log('Email:', email);
      console.log('Password:', password);
    }
  }

  register() {
    this.modalCtrl.create({ component: RegisterComponent }).then((modalEl) => {
      modalEl.present();
    });
  }
}

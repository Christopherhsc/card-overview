import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

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
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

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
    if (!this.loginForm.valid) {
      return;
    }
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      // Perform login logic here
      if (this.emailIsValid(email) && this.passwordIsValid(password)) {
        // Successful login
        
        // Reset the form
        this.loginForm.reset();
        console.log(this.loginForm);
      }
    }
  }
  emailIsValid(email: string): boolean {
    // Simple email validation using regular expression
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  passwordIsValid(password: string): boolean {
    // Minimum length of 5 characters
    return password.length >= 5;
  }

  register() {
    this.modalCtrl.create({ component: RegisterComponent }).then((modalEl) => {
      modalEl.present();
    });
  }
}

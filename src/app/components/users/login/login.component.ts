import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private auth: Auth, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async login() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User logged in');
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}

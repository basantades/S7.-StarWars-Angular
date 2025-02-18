import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private auth: Auth, 
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute  // Inyectamos ActivatedRoute para leer los queryParams
  ) {
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
      
      // Leer el parámetro 'redirectUrl' de los queryParams
      const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/dashboard'; // Si no existe, redirigir a /dashboard
      
      // Redirigir a la URL de destino o la URL por defecto
      this.router.navigate([redirectUrl]);
    } catch (error) {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}

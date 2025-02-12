
import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from '@angular/fire/auth'; 
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
  step: 'email' | 'login' | 'register' = 'email';
  emailExists = false;
  errorMessage: string = '';

  constructor(private auth: Auth, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], // Añadí validación de mínimo 6 caracteres
    });
  }

  async checkEmail() {
    const email = this.loginForm.value.email.trim(); // Quitar espacios en blanco
    this.errorMessage = ''; // Limpiar errores previos

    if (!email) {
      this.errorMessage = 'Ingresa un correo válido.';
      return;
    }

    try {
      const signInMethods = await fetchSignInMethodsForEmail(this.auth, email);
      this.emailExists = signInMethods.length > 0;
      this.step = this.emailExists ? 'login' : 'register';
    } catch (error) {
      this.errorMessage = 'Error verificando el correo.';
    }
  }

  async login() {
    if (this.loginForm.invalid) return;

    try {
      await signInWithEmailAndPassword(this.auth, this.loginForm.value.email, this.loginForm.value.password);
      console.log('Usuario logueado');
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.errorMessage = 'Error en el inicio de sesión.';
    }
  }

  async register() {
    if (this.loginForm.invalid) return;

    try {
      await createUserWithEmailAndPassword(this.auth, this.loginForm.value.email, this.loginForm.value.password);
      console.log('Usuario registrado');
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.errorMessage = 'Error al registrar usuario.';
    }
  }
}

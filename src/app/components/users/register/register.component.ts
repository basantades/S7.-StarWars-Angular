import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private auth: Auth, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatch });
  }

  passwordsMatch(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  async register() {
    if (this.registerForm.invalid) return;

    const { email, password } = this.registerForm.value;

    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('User registered');
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.errorMessage = 'Error registering user.';
    }
  }
}

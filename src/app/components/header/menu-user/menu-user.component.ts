import { Component, inject, signal } from '@angular/core';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu-user',
  standalone: true,
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent {
  private auth = inject(Auth);
  
  // Crear una señal reactiva para el usuario
  user = signal<User | null>(null);

  constructor() {
    // Convertimos el estado de autenticación en una señal reactiva
    onAuthStateChanged(this.auth, (user) => this.user.set(user));
  }

  logout() {
    signOut(this.auth);
  }
}

import { Component, inject, signal } from '@angular/core';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-user',
  standalone: true,
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
  imports: [RouterLink],

})
export class MenuUserComponent {
  private auth = inject(Auth);
  
  // Crear una señal reactiva para el usuario
  user = signal<User | null>(null);

  constructor(    
    private router: Router,
  ) {
    
    // Convertimos el estado de autenticación en una señal reactiva
    onAuthStateChanged(this.auth, (user) => this.user.set(user));
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/']); 
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
  }
}

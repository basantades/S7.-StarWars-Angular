import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavBarComponent, MenuUserComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private location: Location, private router: Router) {}

  ngOnInit() {
    // Suscribirse a los eventos de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false; // Cerrar el menú al completar la navegación
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  goBack() {
    this.location.back(); 
  }
  // Método para verificar si estamos en la home
  isHome(): boolean {
    return this.router.url === '/';
  }
}

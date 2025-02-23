import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavBarComponent, MenuUserComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

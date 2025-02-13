import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { HamburgerComponent } from './hamburger/hamburger.component';

@Component({
  selector: 'app-header',
  imports: [NavBarComponent, MenuUserComponent, HamburgerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

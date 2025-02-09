import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  imports: [NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

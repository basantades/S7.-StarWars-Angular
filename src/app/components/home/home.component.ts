import { Component } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [VideoComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

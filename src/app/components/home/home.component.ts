import { Component } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-home',
  imports: [VideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

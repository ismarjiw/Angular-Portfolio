import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  resumePath = '../assets/Resume.pdf'

  openResume() {
    window.open(this.resumePath, '_blank');
  }
}

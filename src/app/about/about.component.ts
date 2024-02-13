import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ MatButtonModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  resumePath = '../assets/Resume.pdf'

  openResume() {
    window.open(this.resumePath, '_blank');
  }
}

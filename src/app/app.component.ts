import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterModule, CommonModule, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ ]
})
export class AppComponent {
  title = 'portfolio';
}

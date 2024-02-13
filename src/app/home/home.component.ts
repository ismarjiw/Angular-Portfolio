import { DarkmodeService } from './../services/darkmode.service';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { GithubApiService } from '../services/github-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, CommonModule, HttpClientModule, MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './styles.scss',
  providers: [ GithubApiService, DarkmodeService ]
})
export class HomeComponent {
  resumePath = '../assets/Resume.pdf'
  openResume() {
    window.open(this.resumePath, '_blank');
  }

  username = 'ismarjiw';
  bio: string = '';
  avatarUrl: string = '';

  isDarkMode = false;

  constructor(private githubApiService: GithubApiService,
              private darkModeService : DarkmodeService) {
    this.getUserDetails();
  }

  // getUserDetails() {
  //   this.githubApiService.getUser(this.username).subscribe({
  //     next: (data: any) => {
  //       this.bio = data.bio;
  //       this.avatarUrl = data.avatar_url;
  //     },
  //     error: (error: any) => {
  //       console.log('Failed to fetch user details', error);
  //     }
  //   });
  // }

  getUserDetails() {
    this.githubApiService.getUserWithToken(this.username).subscribe({
      next: (data: any) => {
        this.bio = data.bio;
        this.avatarUrl = data.avatar_url;
      },
      error: (error: any) => {
        console.log('Failed to fetch user details', error);
      }
    });
  }

  ngOnInit() {
    // Subscribe to dark mode changes
    this.darkModeService.isDarkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}

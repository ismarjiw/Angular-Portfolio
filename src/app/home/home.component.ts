import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { GithubApiService } from '../services/github-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, CommonModule, HttpClientModule, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ GithubApiService ],
})
export class HomeComponent {
  resumePath = '../assets/Resume.pdf'
  openResume() {
    window.open(this.resumePath, '_blank');
  }

  username = 'ismarjiw';
  bio: string = '';
  avatarUrl: string = '';

  constructor(
    private githubApiService: GithubApiService) {
    this.getUserDetails();
  }

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

}

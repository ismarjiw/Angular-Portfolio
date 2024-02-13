import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private baseUrl = 'https://api.github.com';
  private accessToken: string = environment.githubApiKey;

  constructor(private http: HttpClient) { }

  // getUser(username: string): Observable<any> {
  //   const url = `${this.baseUrl}/users/${username}`;
  //   return this.http.get(url);
  // }

  getUserWithToken(username: string): Observable<any> {
    const url = `${this.baseUrl}/users/${username}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.http.get(url, { headers });
  }
}

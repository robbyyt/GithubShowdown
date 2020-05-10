import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { RepoName } from '../models/RepoName';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  gitApi = 'https://api.github.com';
  constructor(private http: HttpClient) { }

  getUserRepos() {
    let username: string;
    username = localStorage.getItem('username');
    return this.http.get(`${this.gitApi}/users/${username}/repos`).pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );
  }
}

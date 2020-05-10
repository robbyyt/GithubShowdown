import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable, forkJoin } from 'rxjs';
import { RepoName } from '../models/RepoName';
import { RepositoryData } from '../models/RepositoryData';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private gitApi = 'https://api.github.com';
  private repoList: RepositoryData[];
  private listUpdateEmitter: EventEmitter<void> = new EventEmitter<void>();

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

  getRepoList(): RepositoryData[] {
    return this.repoList; // returning a copy of the repoList array
  }

  get onRepoListUpdate() {
    return this.listUpdateEmitter;
  }

  getRepositoryData(...repos: string[]) {
    const repoObservables: Observable<any>[] = [];

    for ( const repo of repos ) {
      repoObservables.push(
        this.http.get(`${this.gitApi}/repos/${repo}`)
      );
    }
    // forkJoin makes sure we get the last emitted values
    forkJoin(repoObservables).subscribe(
      (results) => {
        this.repoList = [];
        for ( const repo of results ) {
          const repoData: RepositoryData = new RepositoryData(repo);
          this.repoList.push(repoData);
        }
        this.listUpdateEmitter.emit();
      }
    );
  }
}

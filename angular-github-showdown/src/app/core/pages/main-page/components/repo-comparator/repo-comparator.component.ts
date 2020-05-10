import { Component, OnInit } from '@angular/core';
import { RepositoryData } from 'src/app/core/models/RepositoryData';
import { GithubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'app-repo-comparator',
  templateUrl: './repo-comparator.component.html',
  styleUrls: ['./repo-comparator.component.scss']
})
export class RepoComparatorComponent implements OnInit {

  public toCompare: RepositoryData[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.toCompare = this.githubService.getRepoList();
    this.githubService.onRepoListUpdate.subscribe(() => this.toCompare = this.githubService.getRepoList());
    // dummy to render on page
    this.githubService.getRepositoryData('octocat/Hello-World', 'octocat/Hello-World');
  }
}

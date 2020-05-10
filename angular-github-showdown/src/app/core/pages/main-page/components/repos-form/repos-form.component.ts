import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/core/services/github.service';
import { RepoName } from 'src/app/core/models/RepoName';



@Component({
  selector: 'app-repos-form',
  templateUrl: './repos-form.component.html',
  styleUrls: ['./repos-form.component.scss']
})
export class ReposFormComponent implements OnInit {
  @Input() input1: string;
  @Input() input2: string;
  options: any;
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getUserRepos();
  }

  public getUserRepos(): void {
    this.githubService.getUserRepos().subscribe( (result: RepoName[]) => {
      this.options = result;
    });
  }

  public compareRepos(): void {
    this.githubService.getRepositoryData(this.input1, this.input2);
  }
}

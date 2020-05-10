import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/core/services/github.service';
import { RepoName } from 'src/app/core/models/RepoName';



@Component({
  selector: 'app-repos-form',
  templateUrl: './repos-form.component.html',
  styleUrls: ['./repos-form.component.scss']
})
export class ReposFormComponent implements OnInit {
  input1 = new FormControl();
  input2 = new FormControl();
  options: any;
  stringOptions: string;
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getUserRepos();
  }

  public getUserRepos(): void {
    this.githubService.getUserRepos().subscribe( (result: RepoName[]) => {
      this.options = result;
    });
  }
}

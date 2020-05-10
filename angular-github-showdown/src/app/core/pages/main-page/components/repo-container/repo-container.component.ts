import { Component, Input } from '@angular/core';
import { RepositoryData } from 'src/app/core/models/RepositoryData';

@Component({
  selector: 'app-repo-container',
  templateUrl: './repo-container.component.html',
  styleUrls: ['./repo-container.component.scss']
})
export class RepoContainerComponent {
  @Input() public repository: RepositoryData;
}

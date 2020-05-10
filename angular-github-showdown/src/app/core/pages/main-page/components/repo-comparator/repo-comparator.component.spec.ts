import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoComparatorComponent } from './repo-comparator.component';

describe('RepoComparatorComponent', () => {
  let component: RepoComparatorComponent;
  let fixture: ComponentFixture<RepoComparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoComparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

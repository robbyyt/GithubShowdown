import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposFormComponent } from './repos-form.component';

describe('ReposFormComponent', () => {
  let component: ReposFormComponent;
  let fixture: ComponentFixture<ReposFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

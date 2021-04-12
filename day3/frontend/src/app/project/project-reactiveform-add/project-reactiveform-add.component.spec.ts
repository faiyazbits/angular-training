import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReactiveformAddComponent } from './project-reactiveform-add.component';

describe('ProjectReactiveformAddComponent', () => {
  let component: ProjectReactiveformAddComponent;
  let fixture: ComponentFixture<ProjectReactiveformAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectReactiveformAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectReactiveformAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

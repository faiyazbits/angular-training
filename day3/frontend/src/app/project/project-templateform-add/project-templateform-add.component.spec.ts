import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTemplateformAddComponent } from './project-templateform-add.component';

describe('ProjectTemplateformAddComponent', () => {
  let component: ProjectTemplateformAddComponent;
  let fixture: ComponentFixture<ProjectTemplateformAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTemplateformAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTemplateformAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

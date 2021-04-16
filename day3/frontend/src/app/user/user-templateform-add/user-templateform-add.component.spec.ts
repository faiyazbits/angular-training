import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateformAddComponent } from './user-templateform-add.component';

describe('UserTemplateformAddComponent', () => {
  let component: UserTemplateformAddComponent;
  let fixture: ComponentFixture<UserTemplateformAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTemplateformAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTemplateformAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

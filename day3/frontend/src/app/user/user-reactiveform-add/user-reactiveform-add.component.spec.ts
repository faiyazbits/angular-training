import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactiveformAddComponent } from './user-reactiveform-add.component';

describe('UserReactiveformAddComponent', () => {
  let component: UserReactiveformAddComponent;
  let fixture: ComponentFixture<UserReactiveformAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReactiveformAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReactiveformAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

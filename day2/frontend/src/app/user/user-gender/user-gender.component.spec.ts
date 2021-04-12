/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserGenderComponent } from './user-gender.component';

describe('UserGenderComponent', () => {
  let component: UserGenderComponent;
  let fixture: ComponentFixture<UserGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordChallengeComponent } from './change-password-challenge.component';

describe('ChangePasswordChallengeComponent', () => {
  let component: ChangePasswordChallengeComponent;
  let fixture: ComponentFixture<ChangePasswordChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenseForm } from './AddLicenseForm.component';

describe('DashboardComponent', () => {
  let component: AddLicenseForm;
  let fixture: ComponentFixture<AddLicenseForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLicenseForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenseForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

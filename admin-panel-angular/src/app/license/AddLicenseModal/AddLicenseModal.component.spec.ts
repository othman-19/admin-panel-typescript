import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenseModal } from './AddLicenseModal.component';

describe('AddLicenseModal', () => {
  let component: AddLicenseModal;
  let fixture: ComponentFixture<AddLicenseModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLicenseModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenseModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

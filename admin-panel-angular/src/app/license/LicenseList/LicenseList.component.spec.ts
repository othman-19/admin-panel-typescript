import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseList } from './LicenseList.component';

describe('LicenseList', () => {
  let component: LicenseList;
  let fixture: ComponentFixture<LicenseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

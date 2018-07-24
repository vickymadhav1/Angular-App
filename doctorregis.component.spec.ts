import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorregisComponent } from './doctorregis.component';

describe('DoctorregisComponent', () => {
  let component: DoctorregisComponent;
  let fixture: ComponentFixture<DoctorregisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorregisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

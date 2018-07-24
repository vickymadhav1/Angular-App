import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregisComponent } from './userregis.component';

describe('UserregisComponent', () => {
  let component: UserregisComponent;
  let fixture: ComponentFixture<UserregisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

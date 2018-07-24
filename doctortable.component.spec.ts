import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctortableComponent } from './doctortable.component';

describe('DoctortableComponent', () => {
  let component: DoctortableComponent;
  let fixture: ComponentFixture<DoctortableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctortableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancesheetComponent } from './attendancesheet.component';

describe('AttendancesheetComponent', () => {
  let component: AttendancesheetComponent;
  let fixture: ComponentFixture<AttendancesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

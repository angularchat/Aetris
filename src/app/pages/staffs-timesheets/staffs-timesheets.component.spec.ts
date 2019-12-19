import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsTimesheetsComponent } from './staffs-timesheets.component';

describe('StaffsTimesheetsComponent', () => {
  let component: StaffsTimesheetsComponent;
  let fixture: ComponentFixture<StaffsTimesheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsTimesheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsTimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

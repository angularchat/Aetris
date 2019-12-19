import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorTimesheetsComponent } from './visitor-timesheets.component';

describe('VisitorTimesheetsComponent', () => {
  let component: VisitorTimesheetsComponent;
  let fixture: ComponentFixture<VisitorTimesheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorTimesheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorTimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

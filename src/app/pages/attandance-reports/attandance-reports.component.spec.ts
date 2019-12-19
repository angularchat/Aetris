import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandanceReportsComponent } from './attandance-reports.component';

describe('AttandanceReportsComponent', () => {
  let component: AttandanceReportsComponent;
  let fixture: ComponentFixture<AttandanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttandanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

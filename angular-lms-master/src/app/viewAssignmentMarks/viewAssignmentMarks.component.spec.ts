import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignmentMarksComponent } from './viewAssignmentMarks.component';

describe('ViewAssignmentMarksComponent', () => {
  let component: ViewAssignmentMarksComponent;
  let fixture: ComponentFixture<ViewAssignmentMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssignmentMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignmentMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

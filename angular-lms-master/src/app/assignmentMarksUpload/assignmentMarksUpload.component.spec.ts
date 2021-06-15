import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentMarksUploadComponent } from './assignmentMarksUpload.component';

describe('AssignmentMarksUploadComponent ', () => {
  let component: AssignmentMarksUploadComponent ;
  let fixture: ComponentFixture<AssignmentMarksUploadComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentMarksUploadComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentMarksUploadComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

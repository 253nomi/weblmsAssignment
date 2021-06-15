import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceUploadComponent } from './attendanceUpload.component';

describe('AttendanceUploadComponent ', () => {
  let component: AttendanceUploadComponent ;
  let fixture: ComponentFixture<AttendanceUploadComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceUploadComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

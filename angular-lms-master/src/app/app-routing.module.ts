import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ConceptsComponent} from './concepts/concepts.component';
import { AddclassComponent } from './addclass/addclass.component';
import { ViewteachersComponent } from './viewteachers/viewteachers.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ViewclassesComponent } from './viewclasses/viewclasses.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProvideFeedbackComponent } from './provideFeedback/provideFeedback.component';
import { AssignmentMarksUploadComponent} from './assignmentMarksUpload/assignmentMarksUpload.component';
import { AttendanceUploadComponent} from './attendanceUpload/attendanceUpload.component';
import { ViewAssignmentMarksComponent} from './viewAssignmentMarks/viewAssignmentMarks.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'concepts',
    component:ConceptsComponent
  },
  {
    path:'addclass',
    component:AddclassComponent
  },
  {
    path:'viewclasses',
    component:ViewclassesComponent
  },
  {
    path:'viewteachers',
    component:ViewteachersComponent
  },
  {
    path:'addteacher',
    component:AddteacherComponent
  },
  {
    path:'viewstudents',
    component:ViewstudentsComponent
  },
  {
    path:'addstudent',
    component:AddstudentComponent
  },
  {
    path:'users',
    component:ListusersComponent
  },
  {
    path:'provideFeedback',
    component:ProvideFeedbackComponent
  },
  {
    path:'assignmentMarksUpload',
    component:AssignmentMarksUploadComponent
  },
  {
    path:'attendanceUpload',
    component:AttendanceUploadComponent
  },
  {
    path:'viewAssignmentMarks',
    component:ViewAssignmentMarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

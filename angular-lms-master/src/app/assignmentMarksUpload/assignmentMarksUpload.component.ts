import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-assignmentMarksUpload',
  templateUrl: './assignmentMarksUpload.component.html',
  styleUrls: ['./assignmentMarksUpload.component.css']
})
export class AssignmentMarksUploadComponent implements OnInit {
    name: String;
    courseName:String;
    assignmentNo:Number;
    obtainedMarks: Number;
    totalMarks: Number;
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  addAssignmentMarks(){
   
  var ret;
  let assignmentMarksData={
    name: this.name,
    courseName:this.courseName,
    assignmentNo:this.assignmentNo,
    obtainedMarks: this.obtainedMarks,
    totalMarks: this.totalMarks,
  };
this._data.addAssignmentMarks(assignmentMarksData).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Assignment Marks Uploaded')
  );
  alert("Assignment Marks Uploaded Successfully");
    this.name ='',
    this.courseName='',
    this.assignmentNo=null,
    this.obtainedMarks=null,
    this.totalMarks=null
    }

  }



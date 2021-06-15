import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-attendanceUpload',
  templateUrl: './attendanceUpload.component.html',
  styleUrls: ['./attendanceUpload.component.css']
})
export class AttendanceUploadComponent implements OnInit {
    name: String;
    regNo:String;
    status:String;
    attendanceDate:Date;
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  addAttendanceData(){
   
  var ret;
  let attendanceData={
    name: this.name,
    regNo:this.regNo,
    status:this.status,
    attendanceDate: this.attendanceDate
 
  };
this._data.addAttendanceData(attendanceData).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Attendance Uploaded')
  );
  alert("Attendance has been uploaded Successfully");
    this.name ='',
    this.regNo='',
    this.status='',
    this.attendanceDate=null
  
        }

  }



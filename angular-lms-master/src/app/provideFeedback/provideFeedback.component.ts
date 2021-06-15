import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-provideFeedback',
  templateUrl: './provideFeedback.component.html',
  styleUrls: ['./provideFeedback.component.css']
})
export class ProvideFeedbackComponent implements OnInit {
  sname:string;
  sphone:string;
  semail:string;
  sfeedback:string;
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  providefeedback(){
   
  var ret;

  let studentFeedback={
    name:this.sname,
    phone:this.sphone,
    email:this.semail,
    feedback:this.sfeedback
  };

this._data.providefeedback(studentFeedback).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Feedback Added')
  );
  alert("Feedback added successfully");
  this.sname='';
  this.sfeedback='';
  this.sphone='';
  this.semail='';
    }

  }



import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-viewsAssignmentMarks',
  templateUrl: './viewAssignmentMarks.component.html',
  styleUrls: ['./viewAssignmentMarks.component.css']
})
export class ViewAssignmentMarksComponent implements OnInit {
  public assignmentMarks;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getAssignmentMarks();
  }

getAssignmentMarks(){
  this._data.viewAssignmentMarks().subscribe(
          data => { this.assignmentMarks = data
          },
          err => console.error(err),
          () => console.log('List of Assignment Marks recieved')
         
      );
    
}
}

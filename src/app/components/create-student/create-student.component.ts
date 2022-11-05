import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  public studentForm:FormGroup=new FormGroup(
  {
    name:new FormControl(),
    gender:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    batch:new FormControl(),
    address: new FormGroup(
      {
        city:new FormControl(),
        state: new FormControl(),
        pin:new FormControl()
      }
    )

  },

  )
  constructor() { }

  ngOnInit(): void {
  }
  register(){[
    console.log(this.studentForm)
  ]}

}

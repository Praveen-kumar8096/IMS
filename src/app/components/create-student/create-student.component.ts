import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, FormGroupName } from '@angular/forms';
import { AllstudentsService } from 'src/app/services/allstudents.service';

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
      }),
    educations:new FormArray([]),
    company:new FormGroup({
      name:new FormControl(),
      location:new FormControl(),
      package:new FormControl(),
      offerDate:new FormControl()
    }),
    sourceType:new FormControl(),
    sourceFrom:new FormControl(),
    referrel:new FormControl()
  
  })
  get educationsFormArray(){
    return this.studentForm.get('educations') as FormArray;
  }
  add(){
      this.educationsFormArray.push(
      new FormGroup({
        qualification:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()
      })
    )
  }
  constructor(private allstudentService:AllstudentsService) { 
    
  }

  ngOnInit(): void {
  }
  register(){
    this.allstudentService.c1(this.studentForm.value).subscribe(
      (data:any)=>{
        console.log(this.studentForm);
        alert('create successfully');
      },
      (error:any)=>{
        alert("give details");
      }
    )
  }
  delete(i:number){
    this.educationsFormArray.removeAt(i);
  }
}

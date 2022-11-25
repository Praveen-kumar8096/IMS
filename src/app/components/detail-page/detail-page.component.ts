import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllstudentsService } from 'src/app/services/allstudents.service';
import { CreateStudentService } from 'src/app/services/create-student.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  public id:string='';
  public student:any=[];
  constructor(private allstudnetService:AllstudentsService,private activatedRoute:ActivatedRoute) { 
    
    this.activatedRoute.params.subscribe(
      (data:any)=>{
        this.student=this.id;
        
        this.allstudnetService.v1(data.id).subscribe(
          (data:any)=>{
            this.student=data;
          }
          
        )
      }
      
    )
  }
    
  ngOnInit(): void {
  }

}

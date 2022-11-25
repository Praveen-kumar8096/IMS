import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllstudentsService } from 'src/app/services/allstudents.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
  
  public Allstundents:any=[];
 
  public term:string='';
  public column:string='';
  public order:string='';
  public id:number=0;
  constructor(private _allstudentsService:AllstudentsService,private router:Router) { 
    this._allstudentsService.a1().subscribe(
      (data:any)=>{
        this.Allstundents=data;
      },
      (error:any)=>{
        alert('internet server invalid');
      }
    )
  }

 
  ngOnInit(): void {
  }
  pagenation(page:number){
    this._allstudentsService.p1(page).subscribe(
      (data:any)=>{
        this.Allstundents=data;
      },
      (error:any)=>{
        alert("internet server down");
      }
    )
  }
  filter(){
    this._allstudentsService.f1(this.term).subscribe(
      (data:any)=>{
      this.Allstundents=data;},
      (error:any)=>{
        alert("server problem");
      }
    )
  }
  sort(){
    
    this._allstudentsService.s1(this.column,this.order).subscribe(
      (data:any)=>{
        this.Allstundents=data;
      }
    )
  }
  view(id:string){
    
    this.router.navigateByUrl("/dashboard/detail-page/"+id);
    
    
  }

}
// public name:string='';
//   public Isgender:boolean=true;
//   public email:string='';
//   public batch:string='';
//   public address:address[]=[{
//     city:'',
//     mandal:'',
//     district:'',
//     state:'',
//     pincode
//   }]
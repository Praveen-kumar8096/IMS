import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  createstudent(){
    this._router.navigateByUrl('/dashboard/create-student');
  }

  allstudents(){
    this._router.navigateByUrl('/dashboard/allstudents');
  }
  navbar(){
    this._router.navigateByUrl("/dashboard/navbar");
  }
}

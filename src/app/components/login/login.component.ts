import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginUserForm:FormGroup=new FormGroup(
  {
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(10)])
  }
)
 constructor(private _loginServce:LoginService ,private _router:Router) { 
    
  }
  
  ngOnInit(): void {
  }
  login(){
    
    console.log(this.loginUserForm);
    this.loginUserForm.markAllAsTouched();
   

    this._loginServce.getlogin(this.loginUserForm.value).subscribe(
      (data:any)=>{
        sessionStorage.setItem('IMS-token',data.token);
        this._router.navigateByUrl('/dashboard');
      },
      (error:any)=>{
        alert('invalid credientials');
      }
    )
  }
 
}

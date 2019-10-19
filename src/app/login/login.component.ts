import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginStatus: boolean=true;

  constructor(private appService:AppService,private router:Router) { }
  user_name:any='';
  password:any='';
  ngOnInit() {
  }
  Login(){
    let obj= {
      user_name:this.user_name,
      password:this.password
    }
    this.appService.getUserAuthentication(obj).subscribe((data:any)=>{
      console.log("data== ",data)
      if(data.success){
        if(data.user_details.length>0){
          this.loginStatus=true;
          let userData = data.user_details[0];
          sessionStorage.setItem('user_id',userData.id);
          sessionStorage.setItem('user_name',userData.user_name);
          sessionStorage.setItem('role',userData.role);
          sessionStorage.setItem('login','true');
          this.router.navigate(['/dashboard']);
        }else{
          this.loginStatus=false;
        }
      }else{
        this.loginStatus=false;
      }
    })
  }
}

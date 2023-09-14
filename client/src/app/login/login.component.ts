import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   loginForm:FormGroup;
   isLoggedIn:boolean=false;
   constructor(private http:HttpClient,private service:GlobalService,private router:Router,public loader:NgxUiLoaderService) {
    this.loginForm=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
   }
   login(){
    this.loader.start();
    console.log(this.loginForm.value);
     this.http.post('http://localhost:5000/user/login',this.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res.status===0){
         this.isLoggedIn=true;
         this.service.isLoggedIn.next(true);
         if(res.user.role==='pmanager'){
          this.service.isAdmin.next(true);
         }
         this.router.navigateByUrl('/home');
      
      }
     })
     this.loader.stop();
   }


}

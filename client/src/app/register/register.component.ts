import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    registerForm:FormGroup;
    constructor(private http:HttpClient,private router:Router,public loader:NgxUiLoaderService){
      this.registerForm=new FormGroup({
        name:new FormControl(''),
        email:new FormControl(''),
        role:new FormControl(''),
        password:new FormControl('')
      })
    }
    register(){
      this.loader.start();
      console.log(this.registerForm.value);
      this.http.post('http://localhost:5000/user/create-user',this.registerForm.value).subscribe((res:any)=>{
        if(res.status===0){
          this.router.navigateByUrl('/login');
        }
        console.log(res);
      })
      this.loader.stop();
    }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskForm:FormGroup;
  constructor(private http:HttpClient,private router:Router,public loader:NgxUiLoaderService){
    this.taskForm=new FormGroup({
      images:new FormControl(''),
      desc:new FormControl(''),
      heading:new FormControl('')
    })
  }
  task(){
    this.loader.start();
    console.log(this.taskForm.value);
    this.http.post('http://localhost:5000/user/addTask',this.taskForm.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['home'])
    })
    this.loader.stop();
  }
  fileUpload(e:any){
    const selectedFile=e.target.files[0];
     if(selectedFile){
        const images=selectedFile;
        //  this.http.post('http://localhost:5000/user/upload',{images}).subscribe((res:any)=>{
        //   console.log(res,"upload sdhg");
        //  })
     }
  }
}

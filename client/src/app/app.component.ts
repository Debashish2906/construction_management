import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client1';
  isLoggedin:boolean=false;
  isAdmin:boolean=false;
  constructor(
    public dialog:MatDialog,private service:GlobalService,private router:Router
  ){

  }
  ngOnInit(): void {
    this.service.isLoggedIn.subscribe((res)=>{
      this.isLoggedin=res;
    })
    this.service.isAdmin.subscribe(res=>{
      this.isAdmin=res;
    })
  }
  

  login(){
     this.dialog.open(LoginComponent);
  }
  logout(){
    this.service.isLoggedIn.next(false);
     this.router.navigateByUrl('login');
  }
}



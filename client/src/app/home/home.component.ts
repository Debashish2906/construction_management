import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http:HttpClient,public loader:NgxUiLoaderService){
  
  }
  cardData:any=[];
  ngOnInit(): void {
    this.loader.start();
     this.http.get('http://localhost:5000/user/tasks').subscribe((res:any)=>{
        this.cardData=res.data
     })
     this.loader.stop();
  }
  images=[
    'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    'https://media.istockphoto.com/id/940251778/photo/construction-site-view-with-tower-crane.jpg?b=1&s=612x612&w=0&k=20&c=Pu71kyZmNufthz4uTC6gFFbX0qM7v6i3fe5m83O8qZg=',
    'https://t4.ftcdn.net/jpg/00/68/63/23/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg',
    'https://www.mhwilliams.com/wp-content/uploads/2018/03/AdobeStock_88620839.jpeg',
    'https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg',
    'https://www.mhwilliams.com/wp-content/uploads/2018/03/AdobeStock_88620839.jpeg',

  
  ]
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'register',component:RegisterComponent

  },
  {
    path:'add-task',component:AddTaskComponent
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

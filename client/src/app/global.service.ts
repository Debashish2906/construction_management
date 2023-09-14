import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isLoggedIn=new BehaviorSubject(false);
  isAdmin=new BehaviorSubject(false);
  constructor() { }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router){ }

  signIn=(user:User)=>{
    localStorage.setItem('user',user.email);
    this.router.navigateByUrl('/');
  }

  signUp=(user:User)=>{
    this.router.navigateByUrl('/');
  }

  logout=()=>{
    localStorage.removeItem('user',)
    this.router.navigateByUrl('login');
  }

  isLoggedIn=()=>{
    const user=localStorage.getItem('user');
    return user?true:false;
  }

  getUser=()=>{
    const user=localStorage.getItem('user');
    return user?user:null;
  }
  
}

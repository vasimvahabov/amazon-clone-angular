import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginGroup!:FormGroup;

  constructor(private formBuilder:FormBuilder,private authService:AuthService){}

  ngOnInit(){
    this.createFormGroup();
  }

  createFormGroup=()=>{
    this.loginGroup=this.formBuilder.group({
      email:[''],
      password:['']
    });
  }

   signIn(){
    // console.log(this.loginGroup.value.email);
    // console.log(this.loginGroup.value.password);
    let user=new User(
      this.loginGroup.value.email,
      this.loginGroup.value.password
    );
    this.authService.signIn(user);
   }

   createAccount(){
     let user=new User(
       this.loginGroup.value.email,
       this.loginGroup.value.password
     );
     this.authService.signUp(user);
   }
  
}

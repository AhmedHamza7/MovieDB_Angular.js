import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService,
    private _Router:Router) { }

 
  loginForm:FormGroup = new FormGroup({
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required, Validators.pattern("^[A-Z][a-z]{3,8}")]),
  })

  errMsg:string = '';
  isLoading:boolean = false;
  submitlogin() {
    this.isLoading = true
    this._AuthService.login(this.loginForm.value).subscribe({
      next:(res)=> {
        if (res.message === 'success'){
          this.isLoading = false;
          localStorage.setItem('userToken', res.token)
          this._AuthService.saveUserData()
          this._Router.navigate(['/home'])
        } else {
          this.errMsg = res.message
          this.isLoading = false;
        }
      }
    })
    
  }

  ngOnInit(): void {
  }

}

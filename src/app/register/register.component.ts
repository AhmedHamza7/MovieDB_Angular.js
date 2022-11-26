import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService,
    private _Router:Router) { }

 
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name:new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z]{3,8}")]),
    age:new FormControl("", [Validators.required, Validators.min(18), Validators.max(55)]),
    
  })

  errMsg:string = '';
  isLoading:boolean = false;
  submitRegister() {
    this.isLoading = true;
    this._AuthService.signup(this.registerForm.value).subscribe({
      next:(res)=> {
        if (res.message === 'success'){
          this.isLoading = false;

          this._Router.navigate(['/login'])
        } else {
          this.errMsg = res.errors.email.message
          this.isLoading = false;
        }
      }
    })
    
  }

  ngOnInit(): void {
  }

}

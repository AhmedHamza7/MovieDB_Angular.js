import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userInfo:any = {}


  constructor(private _AuthService:AuthService) { }

  isLogin:boolean = false;

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:(res)=> {        
        if(res) {
          this.isLogin = true;
          this.userInfo = this._AuthService.userData.getValue()
        }else{
          this.isLogin = false;
        }
      }
    })



    
    
  }


  signOut(){
    this._AuthService.logOut()
  }
  
  
  
  }

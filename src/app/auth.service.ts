import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient, private _Router:Router) { 
    if(localStorage.getItem('userToken')){
      this.saveUserData()
    }
  }

  saveUserData(){
    let encodedData = JSON.stringify(localStorage.getItem('userToken'))
    let decodedData:any = jwtDecode(encodedData)
    this.userData.next(decodedData)
  }
  signup(registerData:object):Observable<any>{
    return this._HttpClient.post('https://route-movies-api.vercel.app/signup', registerData)
  }

  login(registerData:object):Observable<any>{
    return this._HttpClient.post('https://route-movies-api.vercel.app/signin', registerData)
  }


  logOut(){
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['login'])
  }
}

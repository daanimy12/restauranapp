import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
private isloggedIn: boolean = false;
login(email: String,password: String):boolean{
  if(email=="daniel@gmail.com" && password=="12345"){
    console.log(email=="daniel@gmail.com" && password=="12345")
    this.isloggedIn=true;
  }else{
    this.isloggedIn=false;
  }
  return this.isloggedIn;
}
isUserLoggedIn(){
  return this.isloggedIn;
}
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser="";

  accountDetails:any= {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }

  constructor( private http:HttpClient) { 
    this.getDetails();
   }

   saveDetails(){
     localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));
    // if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
    // }
    }
    getDetails(){
      if(localStorage.getItem("accountDetails")){
        this.accountDetails= JSON.parse(localStorage.getItem("accountDetals") || '' )
      }
      if(localStorage.getItem("currentUser")){
        this.currentUser= JSON.parse(localStorage.getItem("currentUser") || '' )
      }
    }

  register(uname:any, acno:any, pswd:any) {
    const data={
      uname,
      acno,
      pswd
    }
    return this.http.post("http://localhost:3000/register",data)
  }

  //   let user = this.accountDetails;

  //   if (acno in user) {
  //     return false;
  //   }
  //   else {
  //     user[acno] = {
  //       acno,
  //       username: uname,
  //       password: pswd,
  //       balance: 0
  //     }
  //     return true;
  //   }
  // }

  
  login(acno: any, pswd: any) {
    let user = this.accountDetails;

    if (acno in user) {
      if (pswd == user[acno]["password"]) {
        this.currentUser=user[acno]["username"]
        return true;

      }
      else {
        alert("Invalid Password");
        return false;
      }

    }
    else {
      alert("Invalid account number");
      return false;
    }


  }

deposit(accno:any,pswd:any,amt:any){
  var amount = parseInt(amt);
  let user = this.accountDetails;
  if(accno in user){
   if (pswd == user[accno]["password"]) {
     user[accno]["balance"]+=amount;
     this.saveDetails();
     return user[accno]["balance"];
  }
  else{
    alert("incorrect password");
    return false;

  }
 }
 else{
   alert("invalid account");
 return false;
 }

}
withdrwal(accno:any,pswd:any,amt:any){
  var amount = parseInt(amt);
  let user = this.accountDetails;
  if(accno in user){
   if (pswd == user[accno]["password"]) {

    if(user[accno]["balance"] > amount){
      user[accno]["balance"]-=amount;
      this.saveDetails();
      return user[accno]["balance"]
    }
    else{
      alert("insufficient balance")
      return false;
    }
  }
  else{
  alert("incorrect password")
  return false;
  }
}
else{
  alert("invalid account")
  return false;
}
}
}


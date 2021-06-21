import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser="";
  options={
    withCredentials:true
  }

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
 
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
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



  login(acno:any, pswd:any) {

    const data={
      acno,
      pswd
    }
    return this.http.post("http://localhost:3000/login",data,this.options)
  }

  // 

deposit(acno:any,pswd:any,amt:any){

const data={
  acno,
  pswd,
  amt
}
return this.http.post("http://localhost:3000/deposit",data,this.options)
}


withdrwal(acno:any,pswd:any,amount:any){


  const data={
    acno,
    pswd,
    amount
  }
  return this.http.post("http://localhost:3000/withdrwal",data,this.options)
  }

  deleteAccDetails(acno:any){
    return this.http.delete("http://localhost:3000/deleteAccDetails"+acno,this.options)

  }



}
  

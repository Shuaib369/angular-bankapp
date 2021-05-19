import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Partner";
  accno = "Account Number Please"      //Binding Source
  pswd = "";

  accountDetails = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  dashboard(){
    
  }

  // accnochange(event: any) {
  //   this.accno = event.target.value;
  //   console.log(this.accno);

  // }              //data fetching - you will get the given value in console  ($event)

  // pswdchange(event: any) {
  //   this.pswd = event.target.value;
  //   console.log(this.pswd);

  // }
  register(){
this.router.navigateByUrl("register");
  }

  login() {
   // alert("login clicked")
   // var acno=this.accno;        //event binding
   // var pswd=this.pswd;        //event binding
    var acno=this.accno;
    var pswd=this.pswd;
   // this.router.navigateByUrl("dashboard")
    const result=this.dataService.login(acno,pswd)
    if(result){
   alert("Successful");
  this.router.navigateByUrl("dashboard");
    }
  }

}

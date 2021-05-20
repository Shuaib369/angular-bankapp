import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm=this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  // accountDetails = {
  //   1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
  //   1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
  //   1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
  //   1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  // }

  constructor(private router:Router,private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
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

   if (this.loginForm.valid){
    var acno=this.loginForm.value.accno;
    var pswd=this.loginForm.value.pswd;
   // this.router.navigateByUrl("dashboard")
    const result=this.dataService.login(acno,pswd);
    if(result){
    alert("Successful");
    this.router.navigateByUrl("dashboard");
    }
    else{
      alert("Invalid Details");
    }
   }
   else{
     alert("Invalid Form");
   }

  }}

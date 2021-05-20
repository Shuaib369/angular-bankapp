import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname="";
  accno="";
  pswd="";
  
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] ,
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  

  constructor(private dataService:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    // if(this.registerForm.valid){
    //   alert("Form Valid");
    // }
    // else{
    //   alert("Invalid Form");
    // }    USED FOR CHECKING WEHTHER THE REGISTER FORM IS VALID OR NOT

  //   console.log(this.registerForm.get('uname')?.errors)
  // if(this.registerForm.get('uname')?.errors){
  //     alert("Invalid Username ");
  //   }
    if(this.registerForm.valid){
    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.accno;
    var pswd= this.registerForm.value.pswd;

    const result=this.dataService.register(uname,acno,pswd);
 
    
    if(result)
    {
     alert("Successfully Registered.....")
    this.router.navigateByUrl("")
    }
    else
      alert("User Already Exsist... Please login")
      
    }
     else{
      alert("Please Give Full Details")
     }
  }
}


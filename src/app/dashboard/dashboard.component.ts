import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // dAccno="";
  // dPswd="";
  // dAmount="";

  // wAccno="";
  // wPswd="";
  // wAmount="";


  depositForm=this.fb.group({ 
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawForm=this.fb.group({ 
    waccno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    wpswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    wamount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  user=this.dataService.currentUser;

  constructor(private dataService:DataService,private router:Router , private fb:FormBuilder) { }

  ngOnInit(): void {
  }


deposit(){
    if(this.depositForm.valid){
  var accno=this.depositForm.value.accno;
  var pswd=this.depositForm.value.pswd;
  var amount=this.depositForm.value.amount;

  const result = this.dataService.deposit(accno,pswd,amount)
  if(result){
    alert("the given amount "+amount+" has been credited... and the balance is:"+result);
  }
}
else{
  alert("Invalid Form");
}
}
withdrwal(){
  if(this.depositForm.valid){
  var accno=this.withdrawForm.value.waccno;
  var pswd=this.withdrawForm.value.wpswd;
  var amount=this.withdrawForm.value.wamount;

  const result = this.dataService.withdrwal(accno,pswd,amount)
  if(result){
    alert("the given amount "+amount+"has been debited .....and the balance is:"+result)
  }
}
else{
  alert("Invalid Form");
}
}
}


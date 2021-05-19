import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dAccno="";
  dPswd="";
  dAmount="";
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  dashboard(){

  }
  deposit(){
    var accno=this.dAccno;
    var pswd=this.dPswd;
    var amount=this.dAmount
   const result= this.dataService.deposit(accno,pswd,amount)
    
  }
 
}

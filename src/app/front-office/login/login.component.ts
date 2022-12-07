import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validator, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { constants } from 'buffer';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(private formBuilder : FormBuilder , private http : HttpClient, private router:Router ){ }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      pass:['',Validators.required],
    })


}
login(){
  this.http.get<any>("http://localhost:3000/signupBusUsers")
  this.http.get<any>("http://localhost:3000/signup")
  .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.pass === this.loginForm.value.pass});

if
(user){
  alert("login Success");
  this.loginForm.reset();
  this.router.navigate(['dashboard'])
}else{
  alert("user not found");
}},err=>{
  alert("something wrong")
})
}}


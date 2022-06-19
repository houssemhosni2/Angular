import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {RegisterLoginService} from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '../utils';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup | any;
  submitted:false | any;
  data:any;
  token:any;
  roleName : string | any ;
  roleId : string | any ;
  constructor(private loginService:RegisterLoginService,private toastr: ToastrService,private formBuilder:FormBuilder,private router:Router, private route: ActivatedRoute) { }
  loginForm(){
    this.form=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
   })
   this.roleName = this.route.snapshot.paramMap.get("roleName");
   this.roleId = Utils.getIdRole( this.roleName);
  }
  ngOnInit(): void {
    this.loginForm();
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    // const role= {"role":"vente"}
    this.loginService.loginUser(this.form.value,this.roleId).subscribe(res =>{
      this.data = res;
      console.log(this.data.user);
      if(this.data.status ===1){
        this.token=this.data.data.token;
        localStorage.setItem('token', this.token);
        localStorage.setItem('user', JSON.stringify(this.data.user));
        if (this.roleId == 1 )
        this.router.navigate(['rvente']);
        if (this.roleId == 2 )
        this.router.navigate(['rachat']);
        if (this.roleId == 3 )
        this.router.navigate(['rcomf']);
        this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }else if(this.data.status===0){
        this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }
      else if(this.data.status===0){
        this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }
    },
    )
  }
}

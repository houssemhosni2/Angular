import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmed.validator';
import {RegisterLoginService} from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '../utils';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   form:FormGroup | any;
   submitted:false | any;
   data:any;
   roleName : string | any ;
   roleId : string | any ;
constructor(private formBuilder:FormBuilder,private toastr: ToastrService,private registerService:RegisterLoginService ,private router:Router,    private route: ActivatedRoute,
  ) { }
   createForm(){
      this.form=this.formBuilder.group({
      name:[null,Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',[Validators.required,Validators.minLength(6)]],
      passwordr:['',Validators.required]
     },{
       validator: MustMatch('password','passwordr')
     }
     );
     this.roleName = this.route.snapshot.paramMap.get("roleName");
     this.roleId = Utils.getIdRole( this.roleName);
   }
  ngOnInit(): void {
    this.createForm();
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    this.registerService.registerUser(this.form.value,this.roleId).subscribe(res =>{
      this.data = res;
      console.log(res);
      if(this.data.status ===1){
        this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
        this.router.navigate(['']);

      }else{
        this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }
      this.submitted=false;
      this.form.get('name').set('');
      this.form.get('email').set('');
      this.form.get('password').set('');
      this.form.get('passwordr').set('');
    });
  }
}

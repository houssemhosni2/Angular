import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { RegisterLoginService } from 'src/app/services/register.service';
@Component({
  selector: 'app-rcomfcopmte',
  templateUrl: './rcomfcopmte.component.html',
  styleUrls: ['./rcomfcopmte.component.css']
})
export class RcomfcopmteComponent implements OnInit {
  token:any;
  userData:any;
  email:any;
  name:any
  password: any;
  user : any;
  defaultName:any;
  constructor(private loginService:RegisterLoginService,private toastr: ToastrService) { }
    ngOnInit(): void {
      this.token = localStorage.getItem('token');
      this.userData=jwt_decode(this.token);
      this.user =localStorage.getItem('user');
      this.user = JSON.parse(this.user);
      this.email=this.userData.email;
      this.defaultName=this.user.name; 
      this.password=this.userData.password;
      console.log(this.token);
      console.log(this.userData);
      console.log(this.userData.name);
    }
    updateUser(){
      this.loginService.updateUser(this.user.id,this.password,this.name).subscribe(res=>{
        localStorage.setItem("user",JSON.stringify(res));
        this.defaultName=this.name; 
      this.toastr.success(JSON.stringify('update avec succès'),JSON.stringify(200),{
        timeOut:2000,
        progressBar:true
      });
     });
    }
}

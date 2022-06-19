import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterLoginService {
  constructor(private http: HttpClient) {}
  registerUser(data: any, roleId: number) {
    return this.http.post('http://127.0.0.1:8000/api/register/' + roleId, data);
  }
  loginUser(data: any, roleId: number) {
    return this.http.post('http://127.0.0.1:8000/api/login/'+ roleId, data);
  }

  updateUser( userId: number,password: any,userName:any) {
    return this.http.put('http://127.0.0.1:8000/api/updateUser/'+ userId, {
      'password':password ,
      'name':userName
    });
  }
}

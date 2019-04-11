import { Injectable } from '@angular/core';
import { HttpClient , HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class UserService {
  currentuser;
  data;

  private url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';

  constructor(private Http: HttpClient, private routs: Router) {  }

  islogedinuser(){
    if( localStorage.getItem('is_login')=='true'){
      return true;
    }
    // else if( localStorage.getItem('is_login')=='false'){
    //   return false;
    // }
    else{
      return false;
    }
  }
  getusername(){
    return localStorage.getItem("username")
  }
  login(formdata:any): Observable<any> {
     const  postingData = new  HttpParams().set('method', "login").set('data', JSON.stringify([{"email":formdata.email,"password":formdata.password}]));

    return this.Http.post<any>(this.url,postingData).pipe(map(apiResponse => {
      if (apiResponse && apiResponse.status==true) {
          localStorage.setItem('is_login', "true");
          localStorage.setItem('username', apiResponse.data.username);
          this.data = apiResponse.data.username;
          return true;
        }
      })  
      );
  }
  signup(signipformdata:any): Observable<any> {
     const  postingData = new  HttpParams().set('method', "registration").set('data', JSON.stringify([{"username":signipformdata.username,"email":signipformdata.email,"password":signipformdata.password}]));
    return this.Http.post<any>(this.url,postingData)
  }

  logout(): void {
    localStorage.setItem('is_login','false')
    this.routs.navigate(['user/signin']);
   // localStorage.clear();
  }



}
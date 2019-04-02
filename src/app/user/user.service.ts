import { Injectable } from '@angular/core';
// import {  User } from './user';
import { HttpClient , HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class UserService {
  currentuser;

  private url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';

  constructor(private Http: HttpClient) {  }

  islogedinuser(){
    if( localStorage.getItem('username')== 'true'){
      return true;
    }
    else{
      return false;
    }
  }

  login(formdata:any): Observable<any> {
    console.log(formdata);
     const  postingData = new  HttpParams().set('method', "login").set('data', JSON.stringify([{"email":formdata.email,"password":formdata.password}]));
     console.log(postingData);
    return this.Http.post<any>(this.url,postingData).pipe(map(apiResponse => {console.log(apiResponse);
      if (apiResponse && apiResponse.status==true) {
        console.log(apiResponse.data.username);
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
    localStorage.clear();
  }


  check(uname: string, pwd: string)  {
    if( uname == "admin" && pwd == "admin12345" ) {
    localStorage.setItem('username',"uname");
    return true;
    }    else {
      return false;
    }
  }
}
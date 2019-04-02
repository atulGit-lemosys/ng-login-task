import { Injectable } from '@angular/core';
import { iposts } from "./userdata";
import { HttpClient , HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {

  constructor( private _http: HttpClient ) {}
    getdata():Observable<iposts[]>{
       return this._http.get<iposts[]>('https://jsonplaceholder.typicode.com/users')
       //return this._http.get<iposts[]>('https://angular.cppatidar.com/angular/webservice/webservice.php',)
      // return this._http.get<iposts[]>('https://logindata-134e7.firebaseio.com/atul')
   }
}
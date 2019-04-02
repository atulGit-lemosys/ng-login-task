import { Injectable } from '@angular/core';
import { HttpClient , HttpParams,HttpHeaders,HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class FeedService {
  private feedUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private feedHTTP:  HttpClient ) { }


  feedlist():Observable<any>{
    return this.feedHTTP.get<any>(this.feedUrl)
  }


}
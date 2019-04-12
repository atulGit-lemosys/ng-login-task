import { Injectable } from '@angular/core';
import { HttpClient , HttpParams,HttpHeaders,HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class FeedService {
 private feedUrl = 'https://angular.cppatidar.com/angular/webservice/webservice.php';

  constructor(private feedHTTP:  HttpClient ) { }
  feedlist():Observable<any>{
    const feedparameter = new HttpParams().set('method',"getFeeds");
    return this.feedHTTP.post<any>(this.feedUrl ,feedparameter)
  }
  singlefeed(activeslug):Observable<any>{
    const feedparameter = new HttpParams().set('method',"getFeedBySlug").set('data',JSON.stringify([{"slug":activeslug}])) ;
    return this.feedHTTP.post<any>(this.feedUrl ,feedparameter)
  }


} 
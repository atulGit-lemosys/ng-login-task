import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import {  ActivatedRoute, Router,Params  } from '@angular/router';

@Component({
  selector: 'app-singlefeed',
  templateUrl: './singlefeed.component.html',
  styleUrls: ['./singlefeed.component.css']
})
export class SinglefeedComponent implements OnInit {
getactiveslug;
activeSlug;

  constructor(private feedservice: FeedService,private router: ActivatedRoute) { 
    this.router.queryParams.subscribe(params => {
      console.log(params.page);
      this.activeSlug = params.page;

    });
  }


  ngOnInit() {
    this.feedservice.singlefeed(this.activeSlug).subscribe(slugdata => {
        if(slugdata.status==true){
            this.getactiveslug =  slugdata.data;
            console.log(slugdata)
        }
          
        })
  }

}
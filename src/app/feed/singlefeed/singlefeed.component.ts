import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import {  ActivatedRoute, Router,Params  } from '@angular/router';

@Component({
  selector: 'app-singlefeed',
  templateUrl: './singlefeed.component.html',
  styleUrls: ['./singlefeed.component.css']
})
export class SinglefeedComponent implements OnInit {
getactiveslug:any;
activeSlug;

  constructor(private feedservice: FeedService,private router: ActivatedRoute) { 
  }


  ngOnInit() {
    let slug = this.router.snapshot.params['slug'];
    this.activeSlug = slug;
    this.feedservice.singlefeed(this.activeSlug).subscribe(slugdata => {
        if(slugdata.status==true){
            this.getactiveslug =  slugdata.data;
        }
        })
  }

} 
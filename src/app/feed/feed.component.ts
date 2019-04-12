import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
getfeeddata;
  config: any; 
   collection = [];


  constructor( private feedservice: FeedService ,private route: ActivatedRoute, private router: Router) { 
       this.config = {
    			currentPage: 1,
    			itemsPerPage: 3
    };
    this.route.queryParamMap
            .map(params => params.get('page'))
            .subscribe(page => this.config.currentPage = page);

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  pageChange(newPage: number) {
		this.router.navigate(['feed'],{queryParams:{page:newPage}});
	}
  ngOnInit() {
      this.feedservice.feedlist().subscribe(feeddata => {
        if(feeddata.status==true){
            this.getfeeddata =  feeddata.data;
        }
        })
  }
getslug(index){
  console.log(index);
  	//this.router.navigate(['singlefeed'],{ queryParams: {page:index} });
    this.router.navigate(['/singlefeed',index])
}
}
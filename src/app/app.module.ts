import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashAuthGuard } from './dash-auth.guard' ;
import { NgxPaginationModule } from 'ngx-pagination';
import { Environment } from './environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyserviceService } from './myservice.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddlistComponent } from './addlist/addlist.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService } from './user/user.service';
import { FeedComponent } from './feed/feed.component';
import { FeedService } from './feed/feed.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SinglefeedComponent } from './feed/singlefeed/singlefeed.component';

@NgModule({
  imports:      [ 
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserModule,
     FormsModule,
    HttpClientModule,
     RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'addlist', component: AddlistComponent,canActivate:[DashAuthGuard]},
      {path:'feed', component: FeedComponent,canActivate:[DashAuthGuard]},
      {path:'singlefeed/:slug', component: SinglefeedComponent,canActivate:[DashAuthGuard]},
      {path:'dashboard', component: DashboardComponent,canActivate:[DashAuthGuard]},
      {path:'user',component: UserComponent,
       children:[
         {path:'signin',component:SignInComponent},
         {path:'signup',component:SignUpComponent},
         {path:'',component:SignInComponent}
       ]},
      { path: "", redirectTo: "home", pathMatch: "full" },
      {path:'**', component: PagenotfoundComponent},

   ])
  ], 
  declarations: [ AppComponent, HelloComponent, HomeComponent, HeaderComponent, FooterComponent, DashboardComponent, AddlistComponent, UserComponent, SignInComponent, SignUpComponent, FeedComponent, PagenotfoundComponent, SinglefeedComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MyserviceService, UserService,DashAuthGuard, FeedService]
})
export class AppModule { }
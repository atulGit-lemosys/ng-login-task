import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signin: FormGroup;
  submitted = false;
  isLogin = false;
  is_error = false;
  error_message : string;
  postdata : string;
  formdata;
  constructor(private routs: Router , private getservise: UserService) { }

  ngOnInit() {
    this.signin = new FormGroup({
      // userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]*')] ),
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
     
    });
  }
   loginuser() {
       var formdata=this.signin.value;  
          this.getservise.login(formdata).subscribe( responseData =>
          {console.log('hello' + ' ' + responseData)
               if(responseData){
                this.isLogin = true;
                this.routs.navigate(['/dashboard']);
               }else{
                 alert(' please check email and password are incorrect')
                  this.error_message='Please check your email and password';
               }
            }
          );
   }


}
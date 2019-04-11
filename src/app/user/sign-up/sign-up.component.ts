import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import {  User } from '../user';
import { UserService } from '../user.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signup: FormGroup;
  error_msg;


  constructor(private getservise: UserService) { }

  ngOnInit() {
    this.signup = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(4) ] ),
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
   signupuser() {
       var signupformdata=this.signup.value;  
          this.getservise.signup(signupformdata).subscribe( responseData =>
          {
            if(responseData.status=true){
              this.signup.reset();
                 this.error_msg = responseData.message;
               }else{
                 alert(' Something wrong');
               }
            }
          );
      
   }
}
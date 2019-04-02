import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
 contactsArrayvar: Array<Contact>;
  constructor( private userservice: MyserviceService){
        this.contactsArrayvar = [];

        // this.userservice.getdata().subscribe(
        //     datas=>console.log(datas.json())
        // );
    }
 addContact(name,phone){
        let contact = new Contact(name,phone);
        this.contactsArrayvar.push(contact);
    }
    removeContact(contact){
        let index = this.contactsArrayvar.indexOf(contact);
        this.contactsArrayvar.splice(index,1);
    }
  ngOnInit() {
  }

}
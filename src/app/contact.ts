export class Contact{

    Name: string;
    Phone: string;
    descr: string;

    constructor(name,phone){
        this.Name  = name;
        this.Phone = phone;
        this.descr = this.Name + ' ' + this.Phone;
    }
}
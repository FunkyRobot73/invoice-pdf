import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  funkyData = {
    name: "Funky Robot Services",
    myname:"Carlos Sousa",
    email:"carlos@funkyrobot.ca",
    number:"(416) 832-3546",
    address:"690 Francis Rd.",
    city:"Burlington",
    province:"ON",
    postal:"L7T 3X7",
    note:"Please note...  We will need a table & power.",
    message: "Please call or email with any additional questions.",
    invoiceId: "25-01-8081",
    date: "Jan. 7th, 2025",
    payment:"CASH",
    balance:"$500",
  }

  constructor() { }
}

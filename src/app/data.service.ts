import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  funkyData = {
    funkyName: "www.FunkyRobot.ca",
    funkyMyName:"Carlos Sousa",
    funkyEmail:"carlos@funkyrobot.ca",
    funkyNumber:"(416) 832-3546",
    funkyAddress:"690 Francis Rd.",
    funkyCity:"Burlington",
    funkyProvince:"ON",
    funkyPostal:"L7T 3X7",
    funkyNote:"Please note...  We will need a table & power.",
    funkyMessage: "Please call or email with any additional questions.",
    funkyInvoiceId: "25-01-8081",
    funkyDate: Date(),
    FunkyPayment:"CASH",
    funkyBalance:"$500",
  }

  constructor() { }
}

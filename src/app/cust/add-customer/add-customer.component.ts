import { Component, NgModule, OnInit, inject } from '@angular/core';
import { jsPDF } from 'jspdf' ;
import { AddCustService } from '../../services/add-cust.service';
import { DataService } from '../../data.service';
import { Customer } from '../../models/customer';
import { FormsModule } from '@angular/forms';
import { NgFor, CommonModule } from '@angular/common';




@Component({
  selector: 'app-add-customer',
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  


  newfName : string = "Adele";
  newlName : string = "Sousa";
  newCompany: string = "Super Kid";
  newEvent: string = "Wedding";
  newDate: string = "12-31-2025";
  newEmail : string ="adele@funky.ca";
  newPhone: string = "416-832-3546";
  newVenueName: string = "Adeles Place";
  newVenueAddress: string = "24 September Rd.";
  newVenueCity: string = "Hamilton";
  newIndoor: string = "Indoor";
  newService: string = "DJ Service";
  newTimeStart: string = "Noon";
  newTimeEnd: string = "Midnight";
  newDetails01: string = "poop";
  newDetails02: string = "poop";
  newDetails03: string = "poop";
  newDetails04: string = "poop";
  newNote: string = "Let me know if you have any questions or comments"
  newQuoteOrInvoice: string = "Quote";
  newStatus: string = "Quote Pending";
  newBalance: number = 0;
  newPayment: string = "0";
  newCost: string = "777";
  newQuoteId: string = "QT-001122";
  newPaymentType: string = "Cash"

  // newCost: number = 750;
  // newQuoteId: number = Date.now();

  //  Date.now()

  customerService = inject(AddCustService)
  dataService = inject(DataService)
  customers: Customer[] = [];
  customers2: Customer[] = [];

  title = 'simple-invoice';
  dateEvent  = "date";
  logo = "images/funky.webp"

  constructor() {

    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  

  addCustomer() {
    this.customerService.createCustomer({

      fName: this.newfName,
      lName: this.newlName,
      company: this.newCompany,
      event: this.newEvent,
      dateEvent: this.newDate,
      email:this.newEmail,
      phone: this.newPhone,
      venueName: this.newVenueName,
      venueAddress: this.newVenueAddress,
      venueCity: this.newVenueCity,
      indoor: this.newIndoor,
      service: this.newService,
      timeStart: this.newTimeStart,
      timeEnd: this.newTimeEnd,
      status: this.newStatus,
      payment: this.newPayment,
      balance: this.newBalance,
      details01: this.newDetails01,
      details02: this.newDetails02,
      details03: this.newDetails03,
      details04: this.newDetails04,
      note: this.newNote,
      quoteOrInvoice: this.newQuoteOrInvoice,
      cost: this.newCost,
      quoteId: this.newQuoteId,
      paymentType: this.newPaymentType

}).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      })

  };

  

  deleteCustomer(index: number) {
    this.customers.splice(index,1)
    localStorage.setItem("customers", JSON.stringify(this.customers))
  }


  generatePDF2(buttonElement: any, x:number) {
    const doc = new jsPDF();
    let fileName2 = buttonElement.textContent;
    doc.setFont('courier');
    doc.setFontSize(12);
    doc.addImage(this.logo, "WEBP", 10, 10, 25, 25);
    doc.text(`${this.dataService.funkyData.funkyName}`, 40, 18);
    doc.text(`${this.dataService.funkyData.email}`, 40, 26);
    doc.setFontSize(24);
    doc.text(`${this.customers[x].quoteOrInvoice}`, 150, 18);
    doc.setFontSize(12);
    let invoice = this.customers[x].quoteId; // .toString()
    doc.text(`# ${invoice}`, 150, 30); // 
    doc.text(`${this.customers[x].dateEvent}`,150, 36);
    doc.text(`${this.customers[x].fName}`, 10, 40);
    doc.text(`${this.customers[x].lName}`, 10, 46);
    doc.text(`${this.customers[x].venueName}`, 10, 52);
    doc.text(`${this.customers[x].venueAddress}`, 10, 58);
    doc.line(10, 62, 200, 62) //startx,STARTy,endx,ENDy
    doc.line(10, 63, 200, 63) //startx,STARTy,endx,ENDy
    doc.setFontSize(10);
    doc.setFont('helvetica');
    
    doc.text(`Services`, 10, 69);
    doc.text(`Amount`, 165, 69);
    doc.setFontSize(12);
    doc.setFont('courier');
    doc.text(`${this.customers[x].service}`, 10, 79);
    doc.text(`${this.customers[x].details01}`, 10, 89);
    doc.text(`${this.customers[x].details02}`, 10, 99);
    doc.text(`${this.customers[x].details03}`, 10, 109);
    doc.text(`${this.customers[x].details04}`, 10, 119);
    doc.line(10, 72, 200, 72) //startx,STARTy,endx,ENDy
    doc.line(10, 73, 200, 73) //startx,STARTy,endx,ENDy
    doc.text(`NOTES: ${this.customers[x].note}`, 20, 240);

    doc.line(160, 76, 160, 232) //startx,STARTy,endx,ENDy VERTICAL LINE

    doc.line(10, 234, 200, 234) //startx,STARTy,endx,ENDy
    doc.line(10, 235, 200, 235) //startx,STARTy,endx,ENDy
    doc.line(10, 244, 200, 244) //startx,STARTy,endx,ENDy
    doc.line(10, 245, 200, 245) //startx,STARTy,endx,ENDy
    doc.text(`TOTAL $ ${this.customers[x].cost}`, 165, 228);
    doc.text(`Rate  $ ${this.customers[x].cost}`, 165, 79);

    doc.save(this.customers[x].lName + "-QT-" + `${invoice}` + '.pdf');
  }

}

import { Component, NgModule, OnInit, inject } from '@angular/core';
import { jsPDF } from 'jspdf' ;
import { AddCustService } from '../../services/add-cust.service';
import { DataService } from '../../data.service';
import { Customer } from '../../models/customer';
import { FormsModule } from '@angular/forms';
import { NgFor, CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';




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
  newDetails01: string = "Wedding Package (Cocktails, Dinner & Dancing)";
  newDetails02: string = "High Quality Sound System with Wireless Mic.";
  newDetails03: string = "Sound activated LED & Intelligent Lighting";
  newDetails04: string = "Approx. 100 Guests...  Custom Playlist available";
  newNote: string = "Let me know if you have any questions or comments"
  newQuoteOrInvoice: string = "Quote";
  newStatus: string = "Quote Pending";
  newBalance: number = 0;
  newPayment: number = 0;
  newCost: number = 1000;
  newQuoteId: string = Math.floor(Date.now() / 1000).toString().slice(2,9);
  newPaymentType: string = "Cash"

  // newCost: number = 750;
  // newQuoteId: number = Date.now();

  

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

  newQuoteID() {
    this.newQuoteId = Math.floor(Date.now() / 1000).toString().slice(2,9);
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
    doc.text(`${this.dataService.funkyData.funkyName}`, 40, 16);
    doc.text(`${this.dataService.funkyData.funkyEmail}`, 40, 22);
    doc.text(`${this.dataService.funkyData.funkyNumber}`, 40, 28);
    doc.setFontSize(24);
    doc.text(`${this.customers[x].quoteOrInvoice}`, 155, 18);
    doc.setFontSize(12);
    let invoice = this.customers[x].quoteId; // .toString()
    doc.text(`# ${this.customers[x].quoteId}`, 165, 26); //
    doc.text(`${this.customers[x].fName} ${this.customers[x].lName}`, 15, 42);
    doc.text(`${this.customers[x].company}`, 15, 47);
    doc.text(`${this.customers[x].email}`, 15, 52);
    doc.text(`${this.customers[x].phone}`, 15, 57);
    
    
    doc.text(`Event Details: ${this.customers[x].dateEvent} @ ${this.customers[x].timeStart}`,15,170);
    doc.line(15, 171, 102, 171) //startx,STARTy,endx,ENDy 
    doc.text(`${this.customers[x].venueName}`, 20,180);
    doc.text(`${this.customers[x].venueAddress}`, 20,186);
   
    
    
    doc.line(10, 62, 200, 62) //startx,STARTy,endx,ENDy
    doc.line(10, 63, 200, 63) //startx,STARTy,endx,ENDy
    doc.setFontSize(10);
    doc.setFont('helvetica');
    
    doc.text(`Services`, 10, 69);
    doc.text(`Amount`, 165, 69);
    doc.setFontSize(10);
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
    doc.text(`Rate`, 145, 79);
    doc.text(`$ ${this.customers[x].cost}`, 165, 79);
    doc.text(`Subtotal`, 141, 208);
    doc.text(`$ ${this.customers[x].cost}`, 165, 208);
    doc.text(`PAYMENT`, 142, 218);
    doc.text(`$ ${this.customers[x].payment}`, 165, 218);
    doc.text(`Balance`, 142, 228);
    doc.text(`$ ${this.customers[x].balance}`, 165, 228);


    doc.save(this.customers[x].lName + "-QT-" + `${invoice}` + '.pdf');
  }

}

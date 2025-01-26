import { Component, NgModule, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from 'jspdf' ;
import { DataService } from '../../data.service';
import { Customer } from '../../models/customer';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-simple-quote',
  imports: [FormsModule, NgFor],
  templateUrl: './simple-quote.component.html',
  styleUrl: './simple-quote.component.css'
})
export class SimpleQuoteComponent implements OnInit {
  

  // newAppointmentTitle : any = "";
  // appointments: Appointment[] = [];
  // newAppointmentDate : Date = new Date();
  customers: Customer[] = [];
  defaultText = "Carlos";
  
  newfName : string = "Carlito";
  newlName : string = "Funky Robot";
  newCompany: string = "";
  newEvent: string = "";
  newDate: string = "10/16/2025";
  newEmail : any ="carlos@funkyrobot.ca";
  newPhone: string = "416-832-3546";
  newVenueName: string = "690 Francis Rd.";
  newVenueAddress: string = "690 Francis Rd.";
  newVenueCity: string = "Burlington";
  newIndoor: string = "3-Hour Photo Booth (Gold Package)";
  newService: string = "3-Hour Photo Booth (Gold Package)";
  newTimeStart: string = "";
  newTimeEnd: string = "";
  newStatus: string = "";
  newPayment: string = "";
  newBalance: number = 995;
  newDetails01: string = "Photo Booth or DJ for Wedding (8-11pm)";
  newDetails02: string = "- High Quality Sound System";
  newDetails03: string = "- Sound activated LED & Intelligent lighting";
  newDetails04: string = "- Customized play-list to suite your requirements";
  newNote: string = "Photo Booth needs Table near Power Outlet"
  newQuoteOrInvoice: string = "Quote";
  newCost: string = "";
  newQuoteId: string = Math.floor(Date.now() / 1000).toString().slice(2,9);
  newPaymentType: string = "Cash";

  dataService = inject(DataService)
  title = 'simple-invoice';
  // todayDate  = Date.now();
  logo = "images/funky.webp"
  
  ngOnInit(): void {
    
  }

  newQuoteID() {
    this.newQuoteId = Math.floor(Date.now() / 1000).toString().slice(2,9);
  }

  addCustomer() {
    if(this.newfName.trim().length && this.newlName){
      let newCustomer: Customer = {
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
      }

      this.customers.push(newCustomer);

      

      // alert(this.customers.length);
      localStorage.setItem("customers", JSON.stringify(this.customers))
    }
  }

  deleteCustomer(index: number) {
    this.customers.splice(index,1)
    localStorage.setItem("customers", JSON.stringify(this.customers))
  }

  

  generatePDF2(buttonElement: any, x:number) {
    const doc = new jsPDF();
    
    const todayDate = new Date();
    const yyyy = todayDate.getFullYear();
    let mm = todayDate.getMonth() + 1; // Months start at 0!
    let dd = todayDate.getDate();
    
    if (dd < 10) dd = 10 + dd;
    if (mm < 10) mm = 10 + mm;
    
    const formattedToday = mm + '/' + dd + '/' + yyyy;

    doc.setFont('courier');
    doc.setFontSize(12);
    doc.addImage(this.logo, "WEBP", 10, 10, 25, 25);
    doc.text(`${this.dataService.funkyData.funkyName}`, 40, 16);
    doc.text(`${this.dataService.funkyData.funkyEmail}`, 40, 22);
    doc.text(`${this.dataService.funkyData.funkyNumber}`, 40, 28);
    doc.setFontSize(24);
    doc.text(`${this.customers[x].quoteOrInvoice}`, 150, 18);
    doc.setFontSize(12);
    let todayDateSeconds = Math.floor(Date.now() / 1000);
    let todayDateString = todayDateSeconds.toString();
    doc.text(`# ${this.newQuoteOrInvoice.slice(0,1)}-${this.customers[x].quoteId}`, 150, 30);
    doc.text(`Date: ${formattedToday}`,150, 36);
    doc.text(`Event: ${this.customers[x].dateEvent}`,150, 42);


    doc.text(`${this.customers[x].fName}`, 15, 40);
    doc.text(`${this.customers[x].email}`, 15, 46);
    doc.text(`${this.customers[x].venueAddress}`, 15, 52);
    doc.text(`${this.customers[x].venueCity}`, 15, 58);
    doc.line(10, 62, 200, 62) //startx,STARTy,endx,ENDy
    doc.line(10, 63, 200, 63) //startx,STARTy,endx,ENDy
    doc.setFontSize(10);
    doc.setFont('helvectica');
    
    doc.text(`Services`, 15, 69);
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
    doc.text(`NOTE(S): ${this.customers[x].note}`, 20, 240);

    doc.line(160, 76, 160, 232) //startx,STARTy,endx,ENDy VERTICAL LINE

    doc.line(10, 234, 200, 234) //startx,STARTy,endx,ENDy
    doc.line(10, 235, 200, 235) //startx,STARTy,endx,ENDy
    doc.line(10, 244, 200, 244) //startx,STARTy,endx,ENDy
    doc.line(10, 245, 200, 245) //startx,STARTy,endx,ENDy
    doc.text(`TOTAL $ ${this.customers[x].balance}`, 165, 228);
    doc.text(`Rate  $ ${this.customers[x].balance}`, 165, 79);

    doc.save(this.customers[x].lName.slice(0,4) + `-${this.newQuoteOrInvoice.slice(0,1)}-` + `${this.customers[x].quoteId}` + '.pdf');
  }

}

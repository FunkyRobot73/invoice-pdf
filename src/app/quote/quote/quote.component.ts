import { Component, NgModule, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from 'jspdf' ;
import { DataService } from '../../data.service';
import { Customer } from '../../models/customer';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-quote',
  imports: [FormsModule, NgFor],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit {

  // newAppointmentTitle : any = "";
  // appointments: Appointment[] = [];
  // newAppointmentDate : Date = new Date();
  customers: Customer[] = [];
  defaultText = "Carlos";
  
  newfName : string = "Carlito";
  newlName : string = "Funky Robot";
  newCompany: string = "";
  newEvent: string = "";
  newDate: string = "";
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
  newBalance: number = 0;
  newDetails01: string = "";
  newDetails02: string = "";
  newDetails03: string = "";
  newDetails04: string = "";
  newNote: string = "Photo Booth needs Table near Power Outlet"
  newQuoteOrInvoice: string = "";
  newCost: string = "";
  newQuoteId: string = "";

  dataService = inject(DataService)
  title = 'simple-invoice';
  dateEvent  = "date";
  logo = "images/funky.webp"
  
  ngOnInit(): void {
    
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
        quoteId: this.newQuoteId
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

  // generatePDF(buttonElement: any) {
  //   const doc = new jsPDF();
  //   let fileName = buttonElement.textContent;
  //   doc.setFont('helvectica');
  //   doc.setFontSize(12);
  //   doc.addImage(this.logo, "WEBP", 10, 10, 25, 25);
  //   doc.text(`${this.dataService.funkyData.name}`, 40, 18);
  //   doc.text(`${this.dataService.funkyData.email}`, 40, 26);
  //   doc.setFontSize(24);
  //   doc.text(`# ${this.customers[0].custId}`, 150, 18);
  //   doc.setFontSize(12);
  //   doc.text(`# ${this.customers[0].custId}`, 160, 30);
  //   doc.text(`${this.customers[0].fName}`, 160, 36);
  //   doc.text(`${this.customers[0].lName}`, 160, 42);
  //   doc.line(20, 25, 60, 25)
  //   doc.setLineDashPattern([7, 3, 1, 3], 10);

  //   doc.text(`${this.customers[0].lName}`, 160, 42);

  //   doc.save(fileName + "-" + this.date.getTime() + '.pdf');
  // }

  generatePDF2(buttonElement: any, x:number) {
    const doc = new jsPDF();
    let fileName2 = buttonElement.textContent;
    doc.setFont('courier');
    doc.setFontSize(12);
    doc.addImage(this.logo, "WEBP", 10, 10, 25, 25);
    doc.text(`${this.dataService.funkyData.name}`, 40, 18);
    doc.text(`${this.dataService.funkyData.email}`, 40, 26);
    doc.setFontSize(24);
    doc.text(`${this.customers[x].quoteOrInvoice}`, 150, 18);
    doc.setFontSize(12);
    let invoice = this.customers[x].quoteId.toString();
    doc.text(`# ${invoice.slice(0,7)}`, 150, 30);
    doc.text(`${this.customers[x].dateEvent}`,150, 36);
    doc.text(`${this.customers[x].fName}`, 10, 40);
    doc.text(`${this.customers[x].lName}`, 10, 46);
    doc.text(`${this.customers[x].venueAddress}`, 10, 52);
    doc.text(`${this.customers[x].venueAddress}`, 10, 58);
    doc.line(10, 62, 200, 62) //startx,STARTy,endx,ENDy
    doc.line(10, 63, 200, 63) //startx,STARTy,endx,ENDy
    doc.setFontSize(10);
    doc.setFont('helvectica');
    
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

    doc.save(this.customers[x].lName + "-QT-" + `${invoice.slice(0,7)}` + '.pdf');
  }
}

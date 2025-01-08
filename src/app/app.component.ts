import { Component, NgModule, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from 'jspdf' ;
import { DataService } from './data.service';
import { Customer } from './models/customer';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  defaultText = "Carlos";
  // newAppointmentTitle : any = "";
  newfName : any = "Carlito";
  // newAppointmentDate : Date = new Date();
  newlName : any = "Funky Robot";
  // appointments: Appointment[] = [];
  newEmail : any ="carlos@funky.ca";
  newDate: Date = new Date();
  customers: Customer[] = [];
  newPhone: string = "416-832-3546";
  newAddress: string = "690 Francis Rd.";
  newCity: string = "Burlington"

  dataService = inject(DataService)
  title = 'simple-invoice';
  date  : Date = new Date();
  logo = "images/funky.webp"
  
  ngOnInit(): void {
    
  }

  addCustomer() {
    if(this.newfName.trim().length && this.newlName){
      let newCustomer: Customer = {
        custId:Date.now(),
        fName: this.newfName,
        lName: this.newlName,
        email:this.newEmail,
        date: this.newDate,
        phone: this.newPhone,
        address: this.newAddress,
        city: this.newCity,
      }

      this.customers.push(newCustomer);

      this.newfName = "Adele";
      this.newlName = "Donatile";

      // alert(this.customers.length);
      localStorage.setItem("customers", JSON.stringify(this.customers))
    }
  }

  deleteCustomer(index: number) {
    this.customers.splice(index,1)
    localStorage.setItem("customers", JSON.stringify(this.customers))
  }

  generatePDF(buttonElement: any) {
    const doc = new jsPDF();
    let fileName = buttonElement.textContent;
    doc.setFont('helvectica');
    doc.setFontSize(12);
    doc.addImage(this.logo, "WEBP", 10, 10, 25, 25);
    doc.text(`${this.dataService.funkyData.name}`, 40, 18);
    doc.text(`${this.dataService.funkyData.email}`, 40, 26);
    doc.setFontSize(24);
    doc.text(`INVOICE`, 150, 18);
    doc.setFontSize(12);
    doc.text(`# ${this.customers[0].custId}`, 160, 30);
    doc.text(`${this.customers[0].fName}`, 160, 36);
    doc.text(`${this.customers[0].lName}`, 160, 42);
    doc.line(20, 25, 60, 25)
    doc.setLineDashPattern([7, 3, 1, 3], 10);

    doc.text(`${this.customers[0].lName}`, 160, 42);

    doc.save(fileName + "-" + this.date.getTime() + '.pdf');
  }

  generatePDF2(buttonElement: any, x:number) {
    const doc = new jsPDF();
    let fileName2 = buttonElement.textContent;
    doc.setFont('courier');
    doc.setFontSize(12);
    doc.addImage(this.logo, "WEBP", 10, 10, 25, 25);
    doc.text(`${this.dataService.funkyData.name}`, 40, 18);
    doc.text(`${this.dataService.funkyData.email}`, 40, 26);
    doc.setFontSize(24);
    doc.text(`INVOICE`, 150, 18);
    doc.setFontSize(12);
    let invoice = this.customers[x].custId.toString();
    doc.text(`# ${invoice.slice(0,7)}`, 150, 30);
    doc.text(`DATE: ${this.customers[x].date}`,160, 36);
    doc.text(`${this.customers[x].fName}`, 10, 40);
    doc.text(`${this.customers[x].lName}`, 10, 46);
    doc.text(`${this.customers[x].address}`, 10, 52);
    doc.text(`${this.customers[x].city}`, 10, 58);
    doc.line(10, 62, 200, 62) //startx,STARTy,endx,ENDy
    doc.line(10, 63, 200, 63) //startx,STARTy,endx,ENDy
    doc.text(`${this.customers[x].city}`, 150, 42);


    doc.save(fileName2 + "-INV-" + this.customers[x].custId + '.pdf');
  }

}

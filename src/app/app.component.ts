import { Component, NgModule, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from 'jspdf' ;
import { DataService } from './data.service';
import { Customer } from './models/customer';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // newAppointmentTitle : any = "";
  newfName : any = "";
  // newAppointmentDate : Date = new Date();
  newlName : any = "";
  // appointments: Appointment[] = [];
  newEmail : any ="";
  newDate: Date = new Date();
  customers: Customer[] = [];
  newPhone: string = "";

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
        phone: this.newPhone
      }

      this.customers.push(newCustomer);

      this.newfName = "Sample";
      this.newlName = "Sousa";

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


    doc.save(fileName + "-" + this.date.getTime() + '.pdf');
  }

}

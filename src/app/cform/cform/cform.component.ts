import { Component, OnInit } from '@angular/core';
import { Packages } from '../../models/packages';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cform',
  imports: [NgFor, FormsModule, NgFor],
  templateUrl: './cform.component.html',
  styleUrl: './cform.component.css'
})
export class CformComponent {
  newPhotobooth : any = [];
  // newDj: any =[];
  newPackages: Packages[] = [];
  // customers: Customer[] = [];
  addQuote() {
      
        let newPackage: Packages = {
          // custId:Date.now(),
          // photobooth.packagePB[]: this.newPhotobooth.packagePB,
          photobooth: this.newPackages.hours
          
        }
  
        this.customers.push(newCustomer);
  
        this.newfName = "Adele";
        this.newlName = "Donatile";
  
        // alert(this.customers.length);
        localStorage.setItem("customers", JSON.stringify(this.customers))
      
    }
}

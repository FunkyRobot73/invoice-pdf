import { Component, OnInit, Pipe } from '@angular/core';
import { Photobooth } from '../../models/photobooth';
import { CurrencyPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuoteComponent } from "../../quote/quote/quote.component";



@Component({
  selector: 'app-cform',
  imports: [NgFor, FormsModule, CurrencyPipe],
  templateUrl: './cform.component.html',
  styleUrl: './cform.component.css'
})
export class CformComponent implements OnInit {
  
  costPerHour = 150;
  costPerHour1 = this.costPerHour;
  totalCost = 0;
  upgradeCosts = 0;
  options = 0;
  quotesPB: Photobooth[] = [];
  newPBHour: number = 2;

  
  newPBProp: string ="Standard";
  
  newPBBackdrop: string ="Silver";
  newPBPrint: string ="Digital Only";
  // newPBSet: string ="Single";
  newPBLayout: string ="Classic Strip";
  newPBUSB: string ="No";
  newPBHost: string ="Included Free";
  newPBEmail: string ="No";
  newPBBook: string ="No";
  newPBGreen: string ="No";
  newPBColor: string ="Color";
  
  absoluteCost = (this.costPerHour * this.newPBHour + this.options);

  backdropCost = 0;
  propCost = 0;
  printCost = 0;
  setCost = 0;
  layoutCost = 0;
  usbCost = 0;
  
  
  addQuote() {
    let newquotePB : Photobooth = {
      // Sample ==> fName: this.newfName,
      pbHour: this.newPBHour,
      pbProp: this.newPBProp,
      pbBackdrop: this.newPBBackdrop,
      pbPrint: this.newPBPrint,
      // pbSet: this.newPBSet,
      pbLayout: this.newPBLayout,
      pbUSB: this.newPBUSB,
      pbHost: this.newPBHost,
      pbEmail: this.newPBEmail,
      pbBook: this.newPBBook,
      pbGreen: this.newPBGreen,
      pbColor: this.newPBColor
    }
    // this.customers.push(newCustomer);
    this.quotesPB.push(newquotePB)
  }

  calculateTotal(): void {
    let backdropCost = 0;
    let propCost = 0;
    let printCost = 0;
    // let setCost = 0;    // Add backdrop costs based on text upgrade
    let layoutCost = 0;
    let usbCost = 0;


    switch (this.newPBBackdrop.toLowerCase()) {
      case 'silver':
        backdropCost = 0;
        break;
      case 'white':
        backdropCost = 50;
        break;
      case 'gold':
        backdropCost = 100;
        break;
      default:
        backdropCost = 0; // No additional cost for invalid input
    }
    // Add backdrop costs based on text upgrade
    switch (this.newPBProp.toLowerCase()) {
      case 'standard':
        propCost = 0;
        break;
      case 'no':
        propCost = 0;
        break;
      case 'fancy':
        propCost = 50;
        break;
        case 'kids':
        propCost = 25;
        break;
      default:
        propCost = 0; // No additional cost for invalid input
    }

    // Add Prints or Digital costs based on text upgrade
    switch (this.newPBPrint.toLowerCase()) {
      case 'digital only':
        printCost = 0;
        break;
      case 'single print':
        printCost = 50;
        break;
      case 'double print':
        printCost = 75;
        break;
      case 'print per guest':
        printCost = 100;
        break;
        
      default:
        printCost = 0; // No additional cost for invalid input
    }

      

      switch (this.newPBLayout.toLowerCase()) {
        case 'classic strip':
          layoutCost = 0;
          break;
        case 'landscape':
          layoutCost = 50;
          break;
          case 'portrait':
          layoutCost = 50;
          break;
        
          
        default:
          layoutCost = 0; // No additional cost for invalid input
      }

      switch (this.newPBUSB.toLowerCase()) {
        case 'no':
          usbCost = 0;
          break;
        case 'yes':
          usbCost = 50;
          break;  
          
        default:
          usbCost = 0; // No additional cost for invalid input
      }

      this.backdropCost = backdropCost;
      this.propCost = propCost;
      this.printCost = printCost;
      // this.setCost = setCost;
      this.layoutCost = layoutCost;
      this.usbCost = usbCost;
      // Total price calculation
      this.upgradeCosts =
      // this.costPerHour * this.newPBHour +
      backdropCost + propCost + printCost + layoutCost + usbCost; // Add upgrade cost
      this.newPBHour = this.newPBHour
  }

  updateQuote() {
    if (this.newPBProp == "Yes") {
      this.options = 1;
    }
    else {
      this.options = 0;
    }
    this.absoluteCost = (this.costPerHour * this.newPBHour + this.options)
  }
    
  ngOnInit(): void {

  }
  

  deleteQuote(index: number) {
    this.quotesPB.splice(index,1)
    localStorage.setItem("quotesPB", JSON.stringify(this.quotesPB))
  }

  
}

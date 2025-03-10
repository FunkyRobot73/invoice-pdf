import { Component, inject, OnInit, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photobooth } from '../../models/photobooth';
import { CurrencyPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPhotoBoothQuoteService } from '../../services/add-photo-booth-quote.service';
import { PropsService } from '../../services/props.service';
import { Props } from '../../models/props';
import { AppComponent } from '../../app.component';
import { CreatePhotoBoothPackageService } from '../../services/create-photo-booth-package.service';



@Component({
  selector: 'app-pb-quote',
  imports: [CommonModule, NgFor, FormsModule, CurrencyPipe],
  templateUrl: './pb-quote.component.html',
  styleUrl: './pb-quote.component.css'
})
export class PbQuoteComponent {

  hoursPBx: number = 3;
  propsPBx: string = "";
  backdropPBx: string = "";
  printsPBx: string = "";
  layoutPBx: string = "";
  usbPBx: string = "";
  hostingPBx: string = "";
  instantDigitalPBx: string = "";
  guestBookPBx: string = "";
  colorPBx: string = "";
  indoorPBx: string = "";
  costPBx:number = 999

  errorPB = "FIX!!!"

  logo = "images/funky-l.png";
  mainLogo = inject(AppComponent).mainLogo
  costPerHour = 150;
  propsService = inject(PropsService)
  props:Props[] = [];
  leftPhoto = "prop.jpg"

  // hoursPB = 2;
  // propsPB = "Standard";
  // backdropPB = "Silver";
  // printsPB = "Digital Only";
  // layoutPB = "Classic Strip";
  // usbPB = "No";
  // hostingPB = "Included Free";
  // instantDigitalPB = "No";
  // guestBookPB = "No";
  // colorPB = "Color";
  // indoorPB = "Indoor";

  constructor() {

    this.propsService.getProp().subscribe({
      next: (data) => {
        this.props = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
// ....................... THIS IS THE LINE...  DON'T CROSS IT

  costPerHour1 = this.costPerHour;
  totalCost = 0;
  upgradeCosts = 0;
  options = 0;
  quotesPB: Photobooth[] = [];
  
  

  imageFile:  string = "";
  imageName: string ="";  
  
  
  absoluteCost = (this.costPerHour * this.hoursPBx + this.options);

  backdropCost = 0;
  propCost = 0;
  printCost = 0;
  setCost = 0;
  layoutCost = 0;
  usbCost = 0;
  costPB = 500;

  // createComicService = inject(CreateComicService)
  createPBQuote = inject(CreatePhotoBoothPackageService)
  
  addQuote() {
    this.createPBQuote.createPhotoBooth({
     
      hoursPB : this.hoursPBx,
      propsPB : this.propsPBx,
      backdropPB : this.backdropPBx,
      printsPB : this.printsPBx,
      layoutPB : this.layoutPBx,
      usbPB : this.usbPBx,
      hostingPB : this.hostingPBx,
      instantDigitalPB : this.instantDigitalPBx,
      guestBookPB : this.guestBookPBx,
      colorPB : this.colorPBx,
      indoorPB : this.indoorPBx,
      costPB : this.costPBx
      // this.imageFile,
      // this.imageName
    }).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    }
    );
    // this.customers.push(newCustomer);
    
  }

  // addPBPackage() {
  //   this.createPBQuote.createPBPackage2(

  //     this.newPBHour,
  //     this.newPBProp,
  //     this.newPBBackdrop,
  //     this.newPBPrint,
  //     this.newPBLayout,
  //     this.newPBUSB,
  //     this.newPBHost,
  //     this.newPBEmail,
  //     this.newPBBook,
  //     this.newPBColor,
  //     this.newPBIndoor,

  //   )
  // }

  calculateTotal(): void {
    let backdropCost = 0;
    let propCost = 0;
    let printCost = 0;
    // let setCost = 0;    // Add backdrop costs based on text upgrade
    let layoutCost = 0;
    let usbCost = 0;


    switch (this.backdropPBx.toLowerCase()) {
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
    switch (this.propsPBx.toLowerCase()) {
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
    switch (this.printsPBx.toLowerCase()) {
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

      

      switch (this.layoutPBx.toLowerCase()) {
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

      switch (this.usbPBx.toLowerCase()) {
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
      this.hoursPBx = this.hoursPBx
  }

  updateQuote() {
    if (this.propsPBx == "Yes") {
      this.options = 1;
    }
    else {
      this.options = 0;
    }
    this.absoluteCost = (this.costPerHour * this.hoursPBx + this.options)
  }
    
  
  

  deleteQuote(index: number) {
    this.quotesPB.splice(index,1)
    localStorage.setItem("quotesPB", JSON.stringify(this.quotesPB))
  }


}

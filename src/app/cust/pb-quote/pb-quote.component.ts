import { Component, inject, OnInit, Pipe } from '@angular/core';
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
  imports: [NgFor, FormsModule, CurrencyPipe],
  templateUrl: './pb-quote.component.html',
  styleUrl: './pb-quote.component.css'
})
export class PbQuoteComponent implements OnInit{

  errorPB = "FIX!!!"

  logo = "images/funky-l.png";
  mainLogo = inject(AppComponent).mainLogo
  costPerHour = 150;
  propsService = inject(PropsService)
  props:Props[] = [];
  leftPhoto = "prop.jpg"

  hoursPB: number = 2;
  propsPB: string ="Standard";
  backdropPB: string ="Silver";
  printsPB: string ="Digital Only";
  layoutPB: string ="Classic Strip";
  usbPB: string ="No";
  hostingPB: string ="Included Free";
  instantDigitalPB: string ="No";
  guestBookPB: string ="No";
  colorPB: string ="Color";
  indoorPB: string ="Indoor";

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
  
  

  imageFile:  File | null = null;
  imageName: string ="";  
  
  
  absoluteCost = (this.costPerHour * this.hoursPB + this.options);

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
    let newquotePB : Photobooth = {
     
      hoursPB: this.hoursPB,
      propsPB: this.propsPB,
      backdropPB: this.backdropPB,
      printsPB: this.printsPB,
      layoutPB: this.layoutPB,
      usbPB: this.usbPB,
      hostingPB: this.hostingPB,
      instantDigitalPB: this.instantDigitalPB,
      guestBookPB: this.guestBookPB,
      colorPB: this.colorPB,
      indoorPB: this.indoorPB,
      costPB: this.costPB
    }
    // this.customers.push(newCustomer);
    this.quotesPB.push(newquotePB)
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


    switch (this.backdropPB.toLowerCase()) {
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
    switch (this.propsPB.toLowerCase()) {
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
    switch (this.printsPB.toLowerCase()) {
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

      

      switch (this.layoutPB.toLowerCase()) {
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

      switch (this.usbPB.toLowerCase()) {
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
      this.hoursPB = this.hoursPB
  }

  updateQuote() {
    if (this.propsPB == "Yes") {
      this.options = 1;
    }
    else {
      this.options = 0;
    }
    this.absoluteCost = (this.costPerHour * this.hoursPB + this.options)
  }
    
  ngOnInit(): void {

  }
  

  deleteQuote(index: number) {
    this.quotesPB.splice(index,1)
    localStorage.setItem("quotesPB", JSON.stringify(this.quotesPB))
  }


}

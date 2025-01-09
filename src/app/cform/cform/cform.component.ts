import { Component, OnInit } from '@angular/core';
import { Photobooth } from '../../models/photobooth';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cform',
  imports: [NgFor, FormsModule],
  templateUrl: './cform.component.html',
  styleUrl: './cform.component.css'
})
export class CformComponent implements OnInit {
  
  quotesPB: Photobooth[] = [];
  
  newPBHour: number = 2;
  
  newPBProp: string ="Yes";
  newPBBackdrop: string ="Silver";
  newPBPrint: string ="Print";
  newPBSet: string ="Single";
  newPBLayout: string ="Strip";
  newPBUSB: string ="NO";
  newPBHost: string ="YES";
  newPBEmail: string ="YES";
  newPBBook: string ="YES";
  newPBGreen: string ="No";
  newPBColor: string ="Color";

  addQuote() {
    let newquotePB : Photobooth = {
      // Sample ==> fName: this.newfName,
      pbHour: this.newPBHour,
      pbProp: this.newPBProp,
    pbBackdrop: this.newPBBackdrop,
    pbPrint: this.newPBPrint,
    pbSet: this.newPBSet,
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
    
  ngOnInit(): void {}

  deleteQuote(index: number) {
    this.quotesPB.splice(index,1)
    localStorage.setItem("quotesPB", JSON.stringify(this.quotesPB))
  }
}

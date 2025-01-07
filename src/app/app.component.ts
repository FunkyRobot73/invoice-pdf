import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from 'jspdf' ;
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  dataService = inject(DataService)
  title = 'simple-invoice';
  date  : Date = new Date();
  logo = "images/funky.webp"
  ngOnInit(): void {
    
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
    doc.text(`${this.dataService.funkyData.date}`, 160, 36);
    doc.text(`# ${this.dataService.funkyData.invoiceId}`, 160, 30);


    doc.save(fileName + "-" + this.date.getTime() + '.pdf');
  }

}

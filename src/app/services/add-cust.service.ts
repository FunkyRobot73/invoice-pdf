import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({

    "newfName" : "Carlito",
    "newlName" : "Sousa",
    "newCompany": "Funky Robot",
    "newEvent": "",
    "newDate": "",
    "newEmail" : "carlos@funky.ca",
    "newPhone": "416-832-3546",
    "newVenueName": "Carmens",
    "newVenueAddress": "690 Francis Rd.",
    "newVenueCity": "Burlington",
    "newIndoor": "Indoor",
    "newService": "3-Hour Photo Booth (Gold Package)",
    "newTimeStart": "",
    "newTimeEnd": "",
    "newStatus": "",
    "newPayment": "",
    "newBalance": 0,
    "newDetails01": "",
    "newDetails02": "",
    "newDetails03": "",
    "newDetails04": "",
    "newNote": "Let me know if you have any questions or comments",
    "newQuoteOrInvoice": "",
    "newCost": "777",
    "newQuoteId": "quoteridd",

  })
}

@Injectable({
  providedIn: 'root'
})
export class AddCustService {
constructor() { };

  private apiUrl01 = "https://back.funkyrobot.ca/customers";
  private apiUrl02 = "https://back.funkyrobot.ca/addcustomers";

  http = inject(HttpClient);

  getCustomers() {
    return this.http.get<any>(this.apiUrl01).pipe(catchError(this.handleError));
  }

  private handleError(error: any){
    console.log(error);
    return throwError(()=> new Error(`Something went poop!`));
  }

  createCustomer(post: any) {
    return this.http.post(this.apiUrl02, post, httpOptions);
  }

  createCustomer2(x:any) {

    this.http.post("https://back.funkyrobot.ca/addcustomers", { name: x }).subscribe(data => {
      console.log(data);
    });

  };

};
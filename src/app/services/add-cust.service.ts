import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({

    "fname" : "Carlito",
    "lname" : "Sousa",
    "company": "Funky Robot",
    "event": "",
    "date": "",
    "email" : "carlos@funky.ca",
    "phone": "416-832-3546",
    "venueName": "Carmens",
    "venueAddress": "690 Francis Rd.",
    "venueCity": "Burlington",
    "indoor": "Indoor",
    "service": "3-Hour Photo Booth (Gold Package)",
    "timeStart": "",
    "timeEnd": "",
    "status": "",
    "payment": "",
    "balance": 0,
    "details01": "",
    "details02": "",
    "details03": "",
    "details04": "",
    "note": "Let me know if you have any questions or comments",
    "quoteOrInvoice": "",
    "cost": "777",
    "quoteId": "quoteridd",

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

};
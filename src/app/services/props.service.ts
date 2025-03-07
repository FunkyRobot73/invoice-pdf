import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({

   "newNameProp" : "Standard"

  })
}

@Injectable({
  providedIn: 'root'
})
export class PropsService {

  constructor() { }

  private apiUrl01 = "https://back.funkyrobot.ca/props";
  http = inject(HttpClient);
  

  getProp() {
      return this.http.get<any>(this.apiUrl01).pipe(catchError(this.handleError));
    }

  private handleError(error: any){
    console.log(error);
    return throwError(()=> new Error(`Something went poop!`));
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "idPB" : "",
    "hoursPB" : "",
    "propsPB" : "",
    "backdropPB" : "black",
    "printsPB" : "",
    "layoutPB" : "",
    "usbPB" : "",
    "hostingPB" : "",
    "instantDigitalPB" : "",
    "guestBookPB" : "",
    "colorPB" : "black",
    "indoorPB" : "",
    "costPB" : "",
  })
}

@Injectable({
  providedIn: 'root'
})
export class CreatePhotoBoothPackageService {
  private apiUrl02 = "https://back.funkyrobot.ca/addphotobooth";

  constructor(private http: HttpClient) { }

  

  createPhotoBooth(post: any) {
    return this.http.post(this.apiUrl02, post, httpOptions);
  }

    // idPB: string,
    // hoursPB: number,
    // propsPB: string,
    // backdropPB: string,
    // printsPB: string,
    // layoutPB: string,
    // usbPB: string,
    // hostingPB: string,
    // instantDigitalPB: string,
    // guestBookPB: string,
    // colorPB: string,
    // indoorPB: string,
    // costPB: number,

    // image: string, // will be changed to file??
    // imageName: string
  
  // ): Observable<any> {

      // const formData = new FormData();
      // formData.append('idPB', idPB);
      // formData.append('hoursPB', hoursPB.toString());
      // formData.append('propsPB', propsPB);
      // formData.append('backdropsPB', backdropPB);
      // formData.append('printsPB', printsPB);
      // formData.append('layoutPB', layoutPB);
      // formData.append('usbPB', usbPB);
      // formData.append('hostingPB', hostingPB);
      // formData.append('instantDigitalPB', instantDigitalPB);
      // formData.append('guestBookPB', guestBookPB);
      // formData.append('colorPB', colorPB);
      // formData.append('indoorPB', indoorPB);
      // formData.append('costPB', costPB.toString());

      // formData.append('value',value.toString());
      // formData.append('qty',qty.toString());

      // imageFile:  File | null = null;

      // formData.append('image', image, imageName);
      
      // return this.http.post(this.apiUrl02, formData)
      

}

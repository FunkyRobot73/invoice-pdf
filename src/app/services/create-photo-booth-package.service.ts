import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "idPB" : "",
    "hoursPB" : "",
    "propsPB" : "",
    "backdropPB" : "",
    "printsPB" : "",
    "layoutPB" : "",
    "usbPB" : "",
    "hostingPB" : "",
    "instantDigitalPB" : "",
    "guestBookPB" : "",
    "colorPB" : "",
    "indoorPB" : "",
    "cost" : "",
  })
}

@Injectable({
  providedIn: 'root'
})
export class CreatePhotoBoothPackageService {
  private apiUrl02 = "https://back.swap2go.ca/addphotobooth";

  constructor(private http: HttpClient) { }

  createPBPackage2(post: any) {
    return this.http.post(this.apiUrl02, post, httpOptions);
  }

  createPhotoBooth(

    idPB: string,
    hoursPB: string,
    propsPB: string,
    backdropPB: string,
    printsPB: string,
    layoutPB: string,
    usbPB: string,
    hostingPB: string,
    instantDigitalPB: string,
    guestBookPB: string,
    colorPB: string,
    indoorPB: string,
    costPB: string,

    image: File, 
    imageName: string
  
  ): Observable<any> {

      const formData = new FormData();
      formData.append('idPB', idPB);
      formData.append('hoursPB', hoursPB);
      formData.append('propsPB', propsPB);
      formData.append('backdropsPB', backdropPB);
      formData.append('printsPB', printsPB);
      formData.append('layoutPB', layoutPB);
      formData.append('usbPB', usbPB);
      formData.append('hostingPB', hostingPB);
      formData.append('instantDigitalPB', instantDigitalPB);
      formData.append('guestBookPB', guestBookPB);
      formData.append('colorPB', colorPB);
      formData.append('indoorPB', indoorPB);
      formData.append('costPB', colorPB);

      // formData.append('value',value.toString());
      // formData.append('qty',qty.toString());

      // imageFile:  File | null = null;

      formData.append('image', image, imageName);
      
      return this.http.post(this.apiUrl02, formData)
      };

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  links = [
    { name: 'Home', url: '/' },
    { name: 'Simple Quote', url: '/quote' },
    { name: 'Add Customer', url: '/addcustomer' },
    { name: 'Photo Booth', url: '/pb' },
    { name: 'Disc Jockey', url: '/dj' }
  ];
  
}

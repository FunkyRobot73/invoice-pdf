import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  links = [
    { name: 'Home', url: '/' },
    { name: 'Simple Quote', url: '/quote' },
    { name: 'Add Customer', url: '/addcustomer' },
    { name: 'Photo Booth', url: '/pb' },
    { name: 'Disc Jockey', url: '/dj' }
  ];
}

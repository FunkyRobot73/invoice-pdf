import { Component } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  links = [
    { name: 'Home', url: '/' },
    { name: 'Simple Quote', url: '/quote' },
    { name: 'Add Customer', url: '/addcustomer' },
    { name: 'Photo Booth', url: '/pb' },
    { name: 'Disc Jockey', url: '/dj' },
    { name: 'Add Blog', url: '/blog' }
  ];
  
}

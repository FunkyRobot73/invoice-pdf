import { Component, NgModule, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "./navbar/navbar/navbar.component";
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BlogMakerComponent } from "./cust/blog-maker/blog-maker.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NavbarComponent, CommonModule, ReactiveFormsModule, BlogMakerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Herro"
  mainLogo = "images/funky-l.png";
}

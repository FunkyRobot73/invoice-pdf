import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-maker',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-maker.component.html',
  styleUrl: './blog-maker.component.css'
})
export class BlogMakerComponent {

  titleBlog: string = "";
  bodyBlog: string = "";
  imageBlog: string = "";
  

  
}

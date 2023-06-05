import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.page.html',
  styleUrls: ['./postdetails.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PostdetailsPage implements OnInit {

  content = "";
  title = "";
  img =""
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    let postId = localStorage.getItem('postId') || ""
    this.postService.getPostById(postId).subscribe(data => {
      this.title = data.title;
      this.content = data.content;
      this.img = data.imageUrl;      
    })
   }
}
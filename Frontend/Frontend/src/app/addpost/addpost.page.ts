import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddpostPage implements OnInit {

  title: string = "";
  content: string = "";
  city: string = "";

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  savePost() {
    var now = new Date();
    var dd = now.getDate() + 1;
    var mm = now.getMonth() + 1;
    var yyyy = now.getFullYear();
    var date = new Date(yyyy + "-" + mm + "-" + dd);
    const post = {
      'postId': '',
      'title': this.title,
      'city': this.city,
      'content': this.content,
      "date": date
    }
    this.postService.addPost(post).subscribe(() => console.log("post added"));
  }
}

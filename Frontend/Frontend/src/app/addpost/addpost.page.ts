import { Component, ElementRef, OnInit } from '@angular/core';
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
  blobURL: string = ""
  constructor(private postService: PostService) { }

  ngOnInit() { }

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
      "date": date,
      "imageUrl": this.blobURL
    }
    this.postService.addPost(post).subscribe(() => console.log("post added"));
  }
  
  loadImageFromDevice(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
      // create blobURL, such that we could use it in an image element:
      this.blobURL = URL.createObjectURL(blob);
    };
  };
}
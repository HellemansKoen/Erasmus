import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-lookposts',
  templateUrl: './lookposts.page.html',
  styleUrls: ['./lookposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LookpostsPage implements OnInit {

  listPosts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(posts => {
      for (let post = 0; post < posts.length; post++) {
        /*
        console.log(posts[post].imageUrl);
        let blobUrl = URL.createObjectURL(posts[post].imageUrl);
         let img = document.getElementById('img') as HTMLImageElement;
         img.src = blobUrl;
         */
        this.listPosts.push(posts[post]);
      }
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { PostService } from '../service/post.service';
import { log } from 'console';

@Component({
  selector: 'app-manageposts',
  templateUrl: './manageposts.page.html',
  styleUrls: ['./manageposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ManagepostsPage implements OnInit {
  listPosts: any[] = [];

  constructor(private navigationService: NavigationService, private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(posts => {
      for (let post = 0; post < posts.length; post++) {
        this.listPosts.push(posts[post]);
      }
    })
  }

  removePost(postId: string) {
     this.postService.removePost(postId).subscribe(() => console.log("post removed"));
  }

  navigate(url: string) {
    this.navigationService.navigate(url)
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { PostService } from '../service/post.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-manageposts',
  templateUrl: './manageposts.page.html',
  styleUrls: ['./manageposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ManagepostsPage implements OnInit {
  listPosts: Post[] =[];

  constructor(private navigationService: NavigationService, private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(posts => {
      for (let post = 0; post < posts.length; post++) {
        this.listPosts.push(posts[post]);
      }
    })
  }

  removePost(postId: string) {

  }
  
  navigate(url: string) {
    this.navigationService.navigate(url)
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../service/post.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-individualcityposts',
  templateUrl: './individualcityposts.page.html',
  styleUrls: ['./individualcityposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IndividualcitypostsPage implements OnInit {

  city = "";
  listPosts: any[] = [];

  constructor(private postService: PostService, private navigationService: NavigationService) { }

  ngOnInit() {
    this.city = localStorage.getItem('SinglePostCity') || ""
    this.postService.getAllPostsByCity(this.city).subscribe(posts => {
      for (let post = 0; post < posts.length; post++) {
        this.listPosts.push(posts[post]);
      }
    })
  }

  navigate(postId: number) {
    localStorage.setItem('postId', postId.toString());
    this.navigationService.navigate("postdetails");
  }

  navigateBack(url: string) {
    this.navigationService.navigate(url);
  }
}

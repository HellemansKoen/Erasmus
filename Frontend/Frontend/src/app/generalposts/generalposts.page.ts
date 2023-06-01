import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../service/post.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-generalposts',
  templateUrl: './generalposts.page.html',
  styleUrls: ['./generalposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GeneralpostsPage implements OnInit {

  listPosts: any[] = [];

  constructor(private postService: PostService,  private navigationService: NavigationService) { }

  ngOnInit() {
    this.postService.getAllPostsByCity('general').subscribe(posts => {
      for (let post = 0; post < posts.length; post++) {
        this.listPosts.push(posts[post]);
      }
    })
  }

  navigate(url: string) {
    this.navigationService.navigate(url);
  }
}

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

  listPosts: any[] = [];
  city = "";
  content = "";
  title = "";
  img ="";
  
  constructor(private postService: PostService, private navigationService: NavigationService) { }

  ngOnInit() {
    this.city = localStorage.getItem('SinglePostCity') || ""
    this.postService.getAllPostsByCity(this.city).subscribe(posts => {
      for (let post = 0; post < posts.length; post++) {
        this.content = posts[post].content;
        this.title = posts[post].title;
        this.img = posts[post].imageUrl;
        this.city =  posts[post].city.charAt(0).toUpperCase() + posts[post].city.substring(1);        
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

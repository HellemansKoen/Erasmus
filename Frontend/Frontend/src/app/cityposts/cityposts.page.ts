import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../service/post.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-cityposts',
  templateUrl: './cityposts.page.html',
  styleUrls: ['./cityposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CitypostsPage implements OnInit {

  city = "";
  AllBinsCity: any[] = []

  constructor(private postService: PostService, private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.city = localStorage.getItem('city') || "";
    this.postService.getAllPostsByCity(this.city).subscribe(posts => {
      for (let post = 0; post < posts.length; post++) {
        this.AllBinsCity.push(posts[post]);
      }
    })
  }

  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}
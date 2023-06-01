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
  AllCities: any[] = []

  constructor(private postService: PostService, private navigationService: NavigationService) {
  }

  ngOnInit() {
    /*    this.postService.getAllCities().subscribe(cities => {
          for (let city = 0; city < cities.length; city++) {
            this.AllCities.push(cities[city]);
          }
        })*/
  }

  navigate(location: string, city: string) {
    localStorage.setItem("SinglePostCity", city);
    this.navigationService.navigate(location);
  }

  navigateBack(url:string){
    this.navigationService.navigate(url);
  }
}

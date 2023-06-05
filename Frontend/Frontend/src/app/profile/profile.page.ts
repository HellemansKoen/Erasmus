import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { NavigationService } from '../service/navigation.service';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})
export class ProfilePage implements OnInit {

  listUsers: any[] = [];
  username = "";
  points = ""
  constructor(private userService: UserService, private navigationService: NavigationService) { }

  ngOnInit() {
   this.userService.getCurrentUser(localStorage.getItem('jwtToken') || "").subscribe(user => {
      console.log(user)
      this.username = user.username;
      this.points = user.score;
    })
  }

  logout() {
    localStorage.setItem('jwtToken', "");
    this.navigate("login");
  }
  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}
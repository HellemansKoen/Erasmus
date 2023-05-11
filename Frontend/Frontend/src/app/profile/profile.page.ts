import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { NavigationService } from '../service/navigation.service';
import { PostService } from '../service/post.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})
export class ProfilePage implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('jwtToken',"");
    this.navigate("login");
  }
  navigate(location: string) {
    this.navigationService.navigate(location);
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../service/post.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-lookposts',
  templateUrl: './lookposts.page.html',
  styleUrls: ['./lookposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LookpostsPage implements OnInit {
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}
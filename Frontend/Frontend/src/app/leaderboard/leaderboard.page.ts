import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../service/user.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LeaderboardPage implements OnInit {

  listUsers: any[] = []
  constructor(private userService: UserService, private navigationService: NavigationService) { }

  ngOnInit() {
    this.userService.getAllUsersSorted().subscribe(users => {
      for (let user = 0; user < users.length; user++) {
      this.listUsers.push(users[user])
      }
    })
    console.log(this.listUsers); // Werkt
  }

  navigate(url: string) {
    this.navigationService.navigate(url);
  }
}

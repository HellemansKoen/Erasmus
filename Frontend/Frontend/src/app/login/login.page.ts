import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  username = "";
  password = "";
  listUsers: any[] = [];
  loginError = false;
  constructor(private userService: UserService, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      for (let user = 0; user < users.length; user++) {
        this.listUsers.push(users[user]);
      }
    })
  }

  login() {
    for (let user = 0; user < this.listUsers.length; user++) {
      console.log(this.listUsers[user].username == this.username);
      console.log(this.listUsers[user].password == this.password);
      if (this.listUsers[user].username = this.username && this.listUsers[user].password == this.password) {
        console.log(this.listUsers[user].role);
        if (this.listUsers[user].role == "user") {
          this.navigationService.navigate("citymap")
        } else if (this.listUsers[user].role == "admin") {
          this.navigationService.navigate("menu")
        }
      }
      else {
        alert("Not succesfull")
        this.loginError = true;
      }
    }
  }

  navigate(url: string) {
    console.log(url);
    this.navigationService.navigate(url);
  }
}
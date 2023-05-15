import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { UserService } from '../service/user.service';
import { log } from 'console';
const CryptoJS = require('crypto-js');

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  username = "";
  password = "";
  email = "";

  constructor(private navigationService: NavigationService, private userService: UserService) { }

  ngOnInit() {
  }

  addUser() {
    const user = {
      'userId': '',
      'email': this.email,
      'username': this.username,
      'score': 0,
      'password': this.password,
      'role': 'user'
    }
    this.userService.addUser(user).subscribe(() => {
      console.log("user added");
    });
    this.navigate("login")
  }
  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { UserService } from '../service/user.service';
const CryptoJS = require('crypto-js');

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
  loginError = false;
  constructor(private userService: UserService, private navigationService: NavigationService) { }

  ngOnInit(): void { }

  login() {
    let token = ""
    if(this.username != null && this.password != null){

    }
    this.userService.login(this.username, this.password).subscribe(response => {
      token = response
      console.log(token);
      if (token) {
        console.log(123);
      } else {
        console.log(333);
      }
    });
  }

  navigate(url: string) {
    console.log(url);
    this.navigationService.navigate(url);
  }
}
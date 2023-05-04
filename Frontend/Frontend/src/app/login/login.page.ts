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
    if (this.username != "" && this.password != "") {
      this.userService.login(this.username, this.password).subscribe(response => {
        token = response
      });
      localStorage.setItem('GBtoken', token);
      let role ="";
      /*this.userService.getCurrentUser(token).subscribe(response => {
        role = response;  
        if(role == "user"){
          this.navigate("citymap")
        } else if(role == "admin"){
          this.navigate("menu")
        }
      })*/
      this.loginError = false
    } else {
      this.loginError = true
    }
  }

  navigate(url: string) {
    this.navigationService.navigate(url);
  }
}
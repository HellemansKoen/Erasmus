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
    let token = this.userService.login(this.username, this.password);
    console.log(token.subscribe());
    
     if(token){
      console.log(123);
      
     }else{console.log(333);
     }
  
    /*for (let user = 0; user < this.listUsers.length; user++) {
      if (this.listUsers[user].username = this.username && this.listUsers[user].password == this.incryptPassword(this.password)) {
        console.log(this.listUsers[user].role);
        if (this.listUsers[user].role == "user") {
          this.navigationService.navigate("citymap")
        } else if (this.listUsers[user].role == "admin") {
          this.navigationService.navigate("menu")
        }
      }
      else {
        this.loginError = true;
      }
    }*/
  }

  navigate(url: string) {
    console.log(url);
    this.navigationService.navigate(url);
  }
}
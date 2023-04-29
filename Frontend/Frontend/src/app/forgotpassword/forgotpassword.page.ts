import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { UserService } from '../service/user.service';
const CryptoJS = require('crypto-js');

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ForgotpasswordPage implements OnInit {

  email: string = "";
  password: string = "";
  passwordAgain: string = "";
  error = false;

  constructor(private navigationService: NavigationService, private userService: UserService) { }

  ngOnInit() {
  }

  resetPassword() {
    if (this.isPasswordCorrect()) {
      const resetPasswordObj = {
        "email": this.email,
        "password": this.password
      }
      this.error = false;
      this.userService.resetPassword(resetPasswordObj).subscribe(() => console.log("password changed"));
      this.navigate("login")
    } else {
      this.error = true
    }
  }

  isPasswordCorrect() {
    if (this.password == this.passwordAgain && this.password != "" && this.passwordAgain != null) {
      return true;
    } else {
      return false;
    }
  }
  navigate(url: string) {
    this.navigationService.navigate(url);
  }
}
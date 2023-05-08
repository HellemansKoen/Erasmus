import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuPage implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    console.log("MENU "+localStorage.getItem('GBtoken'));
  }

  navigate(url:string){
    this.navigationService.navigate(url);
  }

}

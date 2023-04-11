import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { GarbagebinService } from '../service/garbagebin.service';
import { log } from 'console';
import { GarbageBin } from '../models/Garbagebin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private navigationService: NavigationService, private garbagebinService: GarbagebinService) { }
  temp: GarbageBin[] = [];
  ngOnInit() {
  }

  getBin() {
    this.garbagebinService.getBin().subscribe(requests => {
      console.log(requests);
    })
    return this.garbagebinService.getBin().subscribe();
  }

  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GarbagebinService } from '../service/garbagebin.service';
import { NavigationService } from '../service/navigation.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addbin',
  templateUrl: './addbin.page.html',
  styleUrls: ['./addbin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddbinPage implements OnInit {

  constructor(private garbagebinService: GarbagebinService, private navigationService: NavigationService, private modalCtrl: ModalController) { }

  kindBin: any[] | undefined;

  ngOnInit() { }

  addBin() {
    if (this.garbagebinService.lat != null && this.garbagebinService.lng != null) {
      const bin = {
        'binId': '',
        'lat': this.garbagebinService.lat,
        'lng': this.garbagebinService.lng,
        'kindBin': this.kindBin,
        'state' : 'empty'
      }
      let token = localStorage.getItem("jwtToken");
      this.garbagebinService.addBin(bin, token).subscribe();
      this.navigate("citymap")
    }
  }

  navigate(url: string) {
    this.navigationService.navigate(url);
  }
}
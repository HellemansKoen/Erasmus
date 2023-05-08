import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KindBin } from '../models/KindBin';
import { GarbagebinService } from '../service/garbagebin.service';
import { NavigationService } from '../service/navigation.service';
import { ModalController } from '@ionic/angular';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-addbin',
  templateUrl: './addbin.page.html',
  styleUrls: ['./addbin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddbinPage implements OnInit {

  constructor(private garbagebinService: GarbagebinService, private navigationService: NavigationService, private modalCtrl: ModalController) { }

  kindBin = 0;

  ngOnInit() { }
  addBin() {
    let lat = localStorage.getItem('lat');
    let lng = localStorage.getItem('lng');
    if (lat != null && lng != null) {
      const bin = {
        'binId': '',
        'lat': lat?.toString(),
        'lng': lng?.toString(),
        'kindBin': this.kindBin
      }
      let result = this.garbagebinService.addBin(bin);
      /*
      if(result = 1 ){
        navigate("citymap")
      }
      */
    }
  }

  navigate(url: string) {
    this.navigationService.navigate(url);
  }


}
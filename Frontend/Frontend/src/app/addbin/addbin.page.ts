import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KindBin } from '../models/KindBin';
import { GarbagebinService } from '../service/garbagebin.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-addbin',
  templateUrl: './addbin.page.html',
  styleUrls: ['./addbin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddbinPage implements OnInit {

  constructor(private garbagebinService: GarbagebinService, private navigationService: NavigationService) { }

  ngOnInit() {
  }

  addBin(lat: string, lng: string, kindBinString: string) {
    var kindOfBin;
    if (kindBinString == "plastic") {
      kindOfBin = KindBin.PLASTIC;
    } else if (kindBinString == "glas") {
      kindOfBin = KindBin.GLAS;
    } else if (kindBinString == "paper") {
      kindOfBin = KindBin.PAPER;
    } else {
      kindOfBin = KindBin.RESIDUAL;
    }
    const bin = {
      'binId': '',
      'lat': lat,
      'lng': lng,
      'kindBin': kindOfBin
    }
    this.garbagebinService.addBin(bin);
  }
  saveBin() {

  }
  navigate(url: string) {
    this.navigationService.navigate(url);
  }
}

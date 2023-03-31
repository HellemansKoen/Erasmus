import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KindBin } from '../models/KindBin';
import { GarbagebinService } from '../service/garbagebin.service';

@Component({
  selector: 'app-citymap',
  templateUrl: './citymap.page.html',
  styleUrls: ['./citymap.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CitymapPage implements OnInit {

  constructor(private garbagebinService: GarbagebinService) { }

  ngOnInit():void {

  }

  temp(){
    console.log(this.garbagebinService.getBin());
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
      'id': '',
      'lat': lat,
      'lng': lng,
      'kindBin': kindOfBin
    }
   // this.garbagebinService.getBin()
  }
}
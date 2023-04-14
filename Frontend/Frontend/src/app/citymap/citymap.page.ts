import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { GarbagebinService } from '../service/garbagebin.service';
import { KindBin } from '../models/KindBin';
import { GarbageBin } from '../models/GarbageBin';

@Component({
  selector: 'app-citymap',
  templateUrl: './citymap.page.html',
  styleUrls: ['./citymap.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})
export class CitymapPage implements OnInit {

  constructor(private navigationService: NavigationService, private garbagebinService: GarbagebinService) { }
  AllBins: GarbageBin[] = []
  ngOnInit(): void {
    this.garbagebinService.getAllBins().subscribe(bins => {
      for (let bin = 0; bin < bins.length; bin++) {
        this.AllBins.push(bins[bin]);
      }
    })
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
    console.log(bin);
    this.garbagebinService.addBin(bin).subscribe(() => console.log('bin added'));
  }

  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}
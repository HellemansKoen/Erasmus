import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { GarbagebinService } from '../service/garbagebin.service';
import { GarbageBin } from '../models/GarbageBin';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-citymap',
  templateUrl: './citymap.page.html',
  styleUrls: ['./citymap.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent],
})
export class CitymapPage implements OnInit {
  @Input('app-header') inData: any;

  constructor(private navigationService: NavigationService, private garbagebinService: GarbagebinService) { }

  AllBins: GarbageBin[] = []
  map: Leaflet.Map | undefined

  ngOnInit(): void {
    this.garbagebinService.getAllBins().subscribe(bins => {
      for (let bin = 0; bin < bins.length; bin++) {
        this.AllBins.push(bins[bin]);
      }
    })
    this.getAllBins()
  }
  
  getAllBins() {
    console.log(this.AllBins);
  }

  navigate(location: string) {
    this.navigationService.navigate(location);
  }

  /// Leafled try
  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([41.179014, -8.608021], 5);
    var OpenStreetMap_Mapnik = Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    });
    this.map.addLayer(OpenStreetMap_Mapnik);
  }
}
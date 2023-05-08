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

  ngOnInit() {
    /*  this.garbagebinService.getAllBins().subscribe(bins => {
       for (let bin = 0; bin < bins.length; bin++) {
         this.AllBins.push(bins[bin]);
       }
     })
     this.getAllBins()*/
  }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap(): void {
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);
  }
  

  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}
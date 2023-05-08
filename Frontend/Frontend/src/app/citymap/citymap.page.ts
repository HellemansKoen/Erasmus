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
   /* this.garbagebinService.getAllBins().subscribe(bins => {
      for (let bin = 0; bin < bins.length; bin++) {
        this.AllBins.push(bins[bin]);
      }
    })*/
  }
  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap(): void {
    this.map?.remove();
    this.map =
      Leaflet.map('mapId', {
        minZoom: 15, maxZoom: 17,
      }).setView([41.178183, -8.606718], 20);
    /*Leaflet.control.locate({
      position: 'bottomleft'
    }).addTo(this.map);*/
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.locate({ setView: false, watch: false })
      .on('locationfound', (e) => {
        var latlng = Leaflet.latLng(e.latlng.lat, e.latlng.lng);
        var myIcon = Leaflet.icon({
          iconUrl: '../../assets/images/currentLoc.png',
          iconSize: [40, 40]
        });
        if (this.map != null) {
          Leaflet.marker([e.latlng.lat, e.latlng.lng], { icon: myIcon }).addTo(this.map);
          localStorage.setItem('lat', e.latlng.lat.toString());
          localStorage.setItem('lng', e.latlng.lng.toString());
        }
        this.map?.setView(latlng, 17);
        console.log(e.accuracy)
      })
      .on('locationerror', (e) => {
        console.log(e);
        alert("Location access denied")
      })
  //  this.placeAllMarkers();
  }
  placeAllMarkers() {
    for (let index = 0; index < this.AllBins.length; index++) {
      if (this.map) {
        Leaflet.marker([Number(this.AllBins[index].lat), Number(this.AllBins[index].lng)]).addTo(this.map);
      }
    }
  }
  navigate(location: string) {
    this.navigationService.navigate(location);
  }

}
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { GarbagebinService } from '../service/garbagebin.service';
import * as Leaflet from 'leaflet';
import { VoteService } from '../service/vote.service';

@Component({
  selector: 'app-citymap',
  templateUrl: './citymap.page.html',
  styleUrls: ['./citymap.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent],
})
export class CitymapPage implements OnInit {
  @Input('app-header') inData: any;

  constructor(private navigationService: NavigationService, private garbagebinService: GarbagebinService, private voteService: VoteService) { }

  AllBins: any[] = []
  map: Leaflet.Map | undefined

  locate() {
    this.map?.locate();
  }

  ngOnInit() {
    this.garbagebinService.getAllBins().subscribe(bins => {
      for (let bin = 0; bin < bins.length; bin++) {
        this.AllBins.push(bins[bin]);
      }
    })
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap(): void {
    setTimeout(() => {
      console.log(111);
      this.map?.remove();
      this.map = Leaflet.map('mapId', {
        minZoom: 15, maxZoom: 18,
      }).setView([41.178183, -8.606718], 20);
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      this.map.locate({ setView: false, watch: false, enableHighAccuracy: true })
        .on('locationfound', (e) => {
          var latlng = Leaflet.latLng(e.latlng.lat, e.latlng.lng);
          var myIcon = Leaflet.icon({
            iconUrl: '../../assets/images/currentLoc.png',
            iconSize: [40, 40]
          });
          if (this.map != null) {
            Leaflet.marker([e.latlng.lat, e.latlng.lng], { icon: myIcon }).addTo(this.map);
            this.garbagebinService.lat = e.latlng.lat.toString();
            this.garbagebinService.lng = e.latlng.lng.toString();
          }
          this.map?.setView(latlng, 18);
          console.log(e.accuracy)
          this.placeAllMarkers();
        })
        .on('locationerror', (e) => {
          console.log(e);
          alert("Location access denied")
        })
    }, 1000);
  }

  placeAllMarkers() {
    for (let index = 0; index < this.AllBins.length; index++) {
      if (this.map) {
        var myIcon
        if (this.AllBins[index].state ="empty") {
          myIcon = Leaflet.icon({
            iconUrl: '../../assets/images/binPointer.png',
            iconSize: [27, 43]
          });
        } else {
          myIcon = Leaflet.icon({
            iconUrl: '../../assets/images/FullcurrentLoc.png',
            iconSize: [40, 50]
          });
        }

        Leaflet.marker([Number(this.AllBins[index].lat), Number(this.AllBins[index].lng)], { icon: myIcon }).addTo(this.map).on('click', (e) => {
          this.garbagebinService.binId = this.AllBins[index].binId;
          this.garbagebinService.latSingleBin = this.AllBins[index].lat;
          this.garbagebinService.lngSingleBin = this.AllBins[index].lng;
          this.garbagebinService.kindBin = this.AllBins[index].kindBin;
          this.garbagebinService.binFull = this.AllBins[index].binFull;
          this.navigate("singlebininfo")
        });
        // need to make this in a pop up
        // let indBin = document.getElementById("myModal")!.style.display = "block"; 
      }
    }
  }

  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}